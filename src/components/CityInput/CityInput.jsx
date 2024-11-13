// import { useState } from 'react';
import css from './CityInput.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { changeLocation } from '../../redux/filters/filtersSlice.js';

export default function CityInput() {
  // const [location, setLocation] = useState('');
  const dispatch = useDispatch();
  const location = useSelector(state => state.filters.location);

  const handleLocationChange = e => {
    dispatch(changeLocation(e.target.value));
    // console.log(e.target.value);
    // setLocation(e.target.value);
    // Логіка фільтрації кемперів
  };
  return (
    <div className={css.container}>
      <p className={css.text}>Location</p>
      <div className={css.iconWrapper}>
        <svg width={'20px'} height={'20px'} className={css.iconMap}>
          <use href={`/images/icons-defs.svg#icon-map`} />
        </svg>
        <select
          value={location}
          onChange={handleLocationChange}
          className={clsx(css.select, location === '' && css.placeholder)}
        >
          <option value="" disabled>
            City
          </option>
          <option value="Dnipro">Dnipro, Ukraine</option>
          <option value="Kharkiv">Kharkiv, Ukraine</option>
          <option value="Kyiv">Kyiv, Ukraine</option>
          <option value="Lviv">Lviv, Ukraine</option>
          <option value="Odesa">Odesa, Ukraine</option>
          <option value="Poltava">Poltava, Ukraine</option>
          <option value="Sumy">Sumy, Ukraine</option>
        </select>
      </div>
    </div>
  );
}
