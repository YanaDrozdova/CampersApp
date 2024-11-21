import css from './CatalogPage.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchCampers } from '../../redux/campers/operations.js';
import Filters from '../../components/Filters/Filters.jsx';
import CampersList from '../../components/CampersList/CampersList.jsx';
import {
  selectCampers,
  selectIsLoading,
  selectPage,
  selectTotalCamperCount,
} from '../../redux/campers/selectors.js';
import Button from '../../components/Button/Button.jsx';
import { resetCampers, setPage } from '../../redux/campers/actions.js';
import clsx from 'clsx';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const totalCampers = useSelector(selectTotalCamperCount);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(resetCampers());
  }, [dispatch]);

  useEffect(() => {
    console.log('Fetching campers for page:', page);
    dispatch(fetchCampers());
  }, [dispatch, page]);

  const handleLoadMore = () => {
    // setPage(prevPage => prevPage + 1); // Збільшуємо номер сторінки
    dispatch(setPage(page + 1));
  };

  const hasMore = campers.length < totalCampers; // Перевірка, чи є ще кемпери для завантаження

  return (
    <div className={css.container}>
      <div className={css.leftColumn}>
        <Filters />
      </div>
      <div className={css.rightColumn}>
        <CampersList />
        {isLoading && <p>Loading...</p>}
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
