import css from './CatalogPage.module.css';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchCampers } from '../../redux/campers/operations.js';
import Filters from '../../components/Filters/Filters.jsx';
import CampersList from '../../components/CampersList/CampersList.jsx';

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div className={css.leftColumn}>
        <Filters />
      </div>
      <div className={css.rightColumn}>
        <CampersList />
      </div>
    </div>
  );
}
