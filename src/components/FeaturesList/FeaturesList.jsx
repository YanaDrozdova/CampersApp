import css from './FeaturesList.module.css';

export default function FeaturesList({ camper }) {
  return (
    <ul className={css.featuresList}>
      <li className={css.featureItem}>
        <svg width={'20px'} height={'20px'} className={css.featureIcon}>
          <use href={`/images/icons-defs.svg#icon-diagram`} />
        </svg>
        <p className={css.itemText}>
          {camper.transmission.charAt(0).toUpperCase() +
            camper.transmission.slice(1)}
        </p>
      </li>
      <li className={css.featureItem}>
        <svg width={'20px'} height={'20px'} className={css.featureIcon}>
          <use href={`/images/icons-defs.svg#icon-fuel`} />
        </svg>
        <p className={css.itemText}>
          {camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1)}
        </p>
      </li>
      {/* <li className={css.featureItem}>
        <svg width={'20px'} height={'20px'} className={css.featureIcon}>
          <use href={`/images/icons-defs.svg#icon-cup-hot`} />
        </svg>
        <p className={css.itemText}>Kitchen</p>
      </li>
      <li className={css.featureItem}>
        <svg width={'20px'} height={'20px'} className={css.featureIcon}>
          <use href={`/images/icons-defs.svg#icon-wind`} />
        </svg>
        <p className={css.itemText}>AC</p>
      </li> */}
    </ul>
  );
}
