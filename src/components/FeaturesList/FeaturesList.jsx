import css from './FeaturesList.module.css';

export default function FeaturesList({ camper }) {
  // Об'єкт, що містить фільтри та відповідні іконки
  const filterIcons = {
    AC: 'icon-wind',
    kitchen: 'icon-cup-hot',
    TV: 'icon-tv',
    bathroom: 'icon-ph_shower',
    Alcove: 'icon-alcove',
    radio: 'icon-radio',
    gas: 'icon-gas-stove',
    refrigerator: 'icon-solar_fridge',
    microwave: 'icon-microwave',
    water: 'icon-ion_water',
  };

  const keysOptions = [
    'AC',
    'TV',
    'bathroom',
    'gas',
    'kitchen',
    'microwave',
    'radio',
    'refrigerator',
    'water',
  ];

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
      {keysOptions.map(key => {
        if (camper[key] === true) {
          const iconStyle =
            key === 'microwave' || key === 'gas' || key === 'water'
              ? { fill: 'transparent' }
              : {};
          return (
            <li key={key} className={css.featureItem}>
              <svg
                width={'20px'}
                height={'20px'}
                className={css.featureIcon}
                style={iconStyle}
              >
                <use href={`/images/icons-defs.svg#${filterIcons[key]}`} />
              </svg>
              <p className={css.itemText}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </p>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
}
