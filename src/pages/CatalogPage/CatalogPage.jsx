import css from './CatalogPage.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchCampers } from '../../redux/campers/operations.js';
import Filters from '../../components/Filters/Filters.jsx';
import CampersList from '../../components/CampersList/CampersList.jsx';
import {
  selectCampers,
  selectIsLoadingCampers,
  selectPage,
  selectTotalCamperCount,
} from '../../redux/campers/selectors.js';
import Button from '../../components/Button/Button.jsx';
import { resetCampers, setPage } from '../../redux/campers/actions.js';
import clsx from 'clsx';
import { selectLocation } from '../../redux/filters/selectors.js';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const totalCampers = useSelector(selectTotalCamperCount);
  const isLoading = useSelector(selectIsLoadingCampers);
  const page = useSelector(selectPage);
  const locationFilter = useSelector(selectLocation);

  useEffect(() => {
    if (campers.length === 0) {
      // Якщо список кемперів порожній
      dispatch(resetCampers());
    }
  }, [dispatch, campers.length]);

  // При зміні локації, скидаємо список кемперів та номер сторінки
  useEffect(() => {
    if (locationFilter) {
      // Скидаємо сторінку на 1 при зміні локації
      dispatch(setPage(1));
      dispatch(resetCampers());
    }
  }, [dispatch, locationFilter]);

  // Завантажуємо кемперів при зміні сторінки або локації
  useEffect(() => {
    // console.log('Fetching campers for page:', page);
    dispatch(fetchCampers());
  }, [dispatch, page, locationFilter]);

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  const hasMore = campers.length < totalCampers; // Перевірка, чи є ще кемпери для завантаження

  const isEmpty = campers.length === 0 && !isLoading; // Перевірка, чи список порожній після завантаження

  return (
    <div className={css.container}>
      <div className={css.leftColumn}>
        <Filters />
      </div>
      <div className={css.rightColumn}>
        <CampersList />
        {/* Виведення повідомлення, якщо кемперів не знайдено */}
        {isEmpty && (
          <p className={css.noResults}>
            ... No campers found matching your filters ...
          </p>
        )}
        {hasMore && !isLoading && (
          <Button
            text="Load more"
            className={clsx(css.loadMoreBtn)}
            onClick={handleLoadMore}
          />
        )}
      </div>
    </div>
  );
}
