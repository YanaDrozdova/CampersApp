import CamperItem from '../CamperItem/CamperItem.jsx';
import css from './CampersList.module.css';

export default function CampersList() {
  return (
    <ul className={css.campersList}>
      <li className={css.camperItem}>
        <CamperItem />
      </li>
    </ul>
  );
}
