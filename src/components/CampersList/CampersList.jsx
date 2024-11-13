import { useSelector } from 'react-redux';
import CamperItem from '../CamperItem/CamperItem.jsx';
import css from './CampersList.module.css';
import { selectCampers } from '../../redux/campers/selectors.js';

export default function CampersList() {
  const campers = useSelector(selectCampers);

  return (
    <ul className={css.campersList}>
      {campers.length > 0 ? (
        campers.map(camper => (
          <li key={camper.id} className={css.camperItem}>
            <CamperItem camper={camper} />
          </li>
        ))
      ) : (
        <p>No contact was found</p>
      )}
    </ul>
  );
}
