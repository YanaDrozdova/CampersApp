import { useSelector } from 'react-redux';

import {
  selectCampers,
  selectIsLoadingCampers,
} from '../../redux/campers/selectors.js';
import { Loader } from '../Loader/Loader.jsx';
import CamperItem from '../CamperItem/CamperItem.jsx';

import css from './CampersList.module.css';

export default function CampersList() {
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoadingCampers);

  // console.log('Campers from Redux:', campers); // Перевірка, скільки кемперів у списку
  return isLoading ? (
    <Loader />
  ) : (
    <ul className={css.campersList}>
      {campers.map(camper => (
        <li key={camper.id} className={css.camperItem}>
          <CamperItem camper={camper} />
        </li>
      ))}
    </ul>
  );
}
