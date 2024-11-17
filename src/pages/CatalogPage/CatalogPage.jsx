import css from './CatalogPage.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { fetchCampers } from '../../redux/campers/operations.js';
import Filters from '../../components/Filters/Filters.jsx';
import CampersList from '../../components/CampersList/CampersList.jsx';
import {
  selectCampers,
  selectIsLoading,
  selectTotalCamperCount,
} from '../../redux/campers/selectors.js';
import Button from '../../components/Button/Button.jsx';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const totalCampers = useSelector(selectTotalCamperCount);
  const isLoading = useSelector(selectIsLoading);

  const [page, setPage] = useState(1);
  // const [isEmpty, setIsEmpty] = useState(false);
  // const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    dispatch(fetchCampers({ page, limit: 4 }));
  }, [dispatch, page]);

  console.log(campers);
  console.log('count of pages:', page);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1); // Збільшуємо номер сторінки
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
            className={css.loadMoreBtn}
            onClick={handleLoadMore}
          />
        )}
      </div>
    </div>
  );
}
