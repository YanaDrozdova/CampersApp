import css from './Features.module.css';

export default function Features() {
  return (
    <div className={css.container}>
      <ul className={css.featuresList}>
        <li className={css.featureItem}>
          <svg width={'20px'} height={'20px'} className={css.featureIcon}>
            <use href={`/src/assets/images/icons-defs.svg#icon-diagram`} />
          </svg>
          <p className={css.itemText}>Automatic</p>
        </li>
        <li className={css.featureItem}>
          <svg width={'20px'} height={'20px'} className={css.featureIcon}>
            <use href={`/src/assets/images/icons-defs.svg#icon-fuel`} />
          </svg>
          <p className={css.itemText}>Petrol</p>
        </li>
        <li className={css.featureItem}>
          <svg width={'20px'} height={'20px'} className={css.featureIcon}>
            <use href={`/src/assets/images/icons-defs.svg#icon-cup-hot`} />
          </svg>
          <p className={css.itemText}>Kitchen</p>
        </li>
        <li className={css.featureItem}>
          <svg width={'20px'} height={'20px'} className={css.featureIcon}>
            <use href={`/src/assets/images/icons-defs.svg#icon-wind`} />
          </svg>
          <p className={css.itemText}>AC</p>
        </li>
        <li className={css.featureItem}>
          <svg width={'20px'} height={'20px'} className={css.featureIcon}>
            <use href={`/src/assets/images/icons-defs.svg#icon-radio`} />
          </svg>
          <p className={css.itemText}>Radio</p>
        </li>
      </ul>
      <div className={css.vehicleDetails}>
        <h3 className={css.vDetailsTitle}>Vehicle details</h3>
        <ul className={css.vDetailsList}>
          <li className={css.vDetailsItem}>
            <p>Form</p>
            <p>Panel truck</p>
          </li>
          <li className={css.vDetailsItem}>
            <p>Length</p>
            <p>5.4 m</p>
          </li>
          <li className={css.vDetailsItem}>
            <p>Width</p>
            <p>2.01 m</p>
          </li>
          <li className={css.vDetailsItem}>
            <p>Height</p>
            <p>2.05 m</p>
          </li>
          <li className={css.vDetailsItem}>
            <p>Tank</p>
            <p>132 l</p>
          </li>
          <li className={css.vDetailsItem}>
            <p>Consumption</p>
            <p>12.4l/100km</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
