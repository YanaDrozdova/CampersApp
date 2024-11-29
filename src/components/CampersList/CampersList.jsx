import { useSelector } from 'react-redux';
import CamperItem from '../CamperItem/CamperItem.jsx';
import css from './CampersList.module.css';
import {
  selectCampers,
  selectIsLoadingCampers,
} from '../../redux/campers/selectors.js';

export default function CampersList() {
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoadingCampers);

  console.log('Campers from Redux:', campers); // Перевірка, скільки кемперів у списку
  return (
    !isLoading && (
      <ul className={css.campersList}>
        {campers.map(camper => (
          <li key={camper.id} className={css.camperItem}>
            <CamperItem camper={camper} />
          </li>
        ))}
      </ul>
    )
  );
}
