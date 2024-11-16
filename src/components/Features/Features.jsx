import { useSelector } from 'react-redux';
import css from './Features.module.css';
import { selectCamperInfo } from '../../redux/campers/selectors.js';
import FeaturesList from '../FeaturesList/FeaturesList.jsx';

export default function Features() {
  const camper = useSelector(selectCamperInfo);

  function addSpaceBetweenNumberAndUnit(value) {
    return value.replace(/(\d+)([a-zA-Zа-яА-Я]+)/, '$1 $2');
  }

  const { length, width, height, tank } = {
    length: addSpaceBetweenNumberAndUnit(camper.length),
    width: addSpaceBetweenNumberAndUnit(camper.width),
    height: addSpaceBetweenNumberAndUnit(camper.height),
    tank: addSpaceBetweenNumberAndUnit(camper.tank),
  };

  return (
    <div className={css.container}>
      <FeaturesList camper={camper} />
      <div className={css.vehicleDetails}>
        <h3 className={css.vDetailsTitle}>Vehicle details</h3>
        <ul className={css.vDetailsList}>
          <li className={css.vDetailsItem}>
            <p>Form</p>
            <p>{camper.form}</p>
          </li>
          <li className={css.vDetailsItem}>
            <p>Length</p>
            <p>{length}</p>
          </li>
          <li className={css.vDetailsItem}>
            <p>Width</p>
            <p>{width}</p>
          </li>
          <li className={css.vDetailsItem}>
            <p>Height</p>
            <p>{height}</p>
          </li>
          <li className={css.vDetailsItem}>
            <p>Tank</p>
            <p>{tank}</p>
          </li>
          <li className={css.vDetailsItem}>
            <p>Consumption</p>
            <p>{camper.consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
