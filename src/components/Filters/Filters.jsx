import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import { toggleFilter } from '../../redux/filters/filtersSlice.js';
import Button from '../Button/Button.jsx';
import CityInput from '../CityInput/CityInput.jsx';

import css from './Filters.module.css';

export default function Filters() {
  const dispatch = useDispatch();
  const selectedFilters = useSelector(state => state.filters.selectedFilters);

  const handleToggleFilter = filter => dispatch(toggleFilter(filter));

  const isSelected = filter => selectedFilters.includes(filter);

  // Об'єкт, що містить фільтри та відповідні іконки
  const filterIcons = {
    AC: 'icon-wind',
    Automatic: 'icon-diagram',
    Kitchen: 'icon-cup-hot',
    TV: 'icon-tv',
    Bathroom: 'icon-ph_shower',
    Van: 'icon-van',
    'Fully Integrated': 'icon-bi_grid',
    Alcove: 'icon-alcove',
  };

  return (
    <>
      <CityInput />
      <p className={css.text}>Filters</p>

      <h4 className={css.filterTitle}>Vehicle equipment</h4>
      <ul className={css.equipList}>
        {['AC', 'Automatic', 'Kitchen', 'TV', 'Bathroom'].map(filter => (
          <li key={filter} className={css.equipItem}>
            <button
              className={clsx(css.filterBtn, {
                [css.selected]: isSelected(filter), // Додаємо клас selected, якщо фільтр вибраний
              })}
              onClick={() => handleToggleFilter(filter)}
            >
              <svg width={'32px'} height={'32px'} className={css.icon}>
                <use
                  width={'32px'}
                  height={'32px'}
                  href={`/src/assets/images/icons-defs.svg#${filterIcons[filter]}`}
                />
              </svg>
              <p>{filter}</p>
            </button>
          </li>
        ))}
        {/* <li className={css.equipItem}>
          <button
            className={clsx(css.filterBtn, {
              [css.selected]: isSelected(filter),
            })}
          >
            <svg width={'32px'} height={'32px'} className={css.icon}>
              <use
                width={'32px'}
                height={'32px'}
                href={`/src/assets/images/icons-defs.svg#icon-wind`}
              />
            </svg>
            <p>AC</p>
          </button>
        </li>
        <li className={css.equipItem}>
          <button className={css.filterBtn}>
            <svg width={'32px'} height={'32px'} className={css.icon}>
              <use
                width={'32px'}
                height={'32px'}
                href={`/src/assets/images/icons-defs.svg#icon-diagram`}
              />
            </svg>
            <p>Automatic</p>
          </button>
        </li>
        <li className={css.equipItem}>
          <button className={css.filterBtn}>
            <svg width={'32px'} height={'32px'} className={css.icon}>
              <use
                width={'32px'}
                height={'32px'}
                href={`/src/assets/images/icons-defs.svg#icon-cup-hot`}
              />
            </svg>
            <p>Kitchen</p>
          </button>
        </li>
        <li className={css.equipItem}>
          <button className={css.filterBtn}>
            <svg width={'32px'} height={'32px'} className={css.icon}>
              <use
                width={'32px'}
                height={'32px'}
                href={`/src/assets/images/icons-defs.svg#icon-tv`}
              />
            </svg>
            <p>TV</p>
          </button>
        </li>
        <li className={css.equipItem}>
          <button className={css.filterBtn}>
            <svg width={'32px'} height={'32px'} className={css.icon}>
              <use
                width={'32px'}
                height={'32px'}
                href={`/src/assets/images/icons-defs.svg#icon-ph_shower`}
              />
            </svg>
            <p>Bathroom</p>
          </button>
        </li> */}
      </ul>

      <h4 className={css.filterTitle}>Vehicle type</h4>
      <ul className={css.equipList}>
        {['Van', 'Fully Integrated', 'Alcove'].map(filter => (
          <li key={filter} className={css.equipItem}>
            <button
              className={clsx(css.filterBtn, css.vehicleTypeBtn, {
                [css.selected]: isSelected(filter),
                [css.fullyIntegrBtn]: filter === 'Fully Integrated', // Додаємо клас для Fully Integrated
              })}
              onClick={() => handleToggleFilter(filter)}
            >
              <svg width={'32px'} height={'32px'} className={css.icon}>
                <use
                  width={'32px'}
                  height={'32px'}
                  href={`/src/assets/images/icons-defs.svg#${
                    filterIcons[filter] || 'icon-default'
                  }`}
                />
              </svg>
              <p>{filter}</p>
            </button>
          </li>
        ))}
        {/* <li className={css.equipItem}>
          <button className={css.vehicleTypeBtn}>
            <svg width={'32px'} height={'32px'} className={css.icon}>
              <use
                width={'32px'}
                height={'32px'}
                href={`/src/assets/images/icons-defs.svg#icon-van`}
              />
            </svg>
            <p>Van</p>
          </button>
        </li>
        <li className={css.equipItem}>
          <button className={css.fullyIntegrBtn}>
            <svg width={'32px'} height={'32px'} className={css.icon}>
              <use
                width={'32px'}
                height={'32px'}
                href={`/src/assets/images/icons-defs.svg#icon-bi_grid`}
              />
            </svg>
            <p>Fully Integrated</p>
          </button>
        </li>
        <li className={css.equipItem}>
          <button className={css.vehicleTypeBtn}>
            <svg width={'32px'} height={'32px'} className={css.icon}>
              <use
                width={'32px'}
                height={'32px'}
                href={`/src/assets/images/icons-defs.svg#icon-alcove`}
              />
            </svg>
            <p>Alcove</p>
          </button>
        </li> */}
      </ul>

      <div className={css.searchBtnContainer}>
        <Button text="Search" className={css.searchBtn} />
      </div>
    </>
  );
}