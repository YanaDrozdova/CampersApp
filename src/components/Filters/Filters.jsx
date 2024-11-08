import Button from '../Button/Button.jsx';
import CityInput from '../CityInput/CityInput.jsx';
import css from './Filters.module.css';

export default function Filters() {
  return (
    <>
      <CityInput />
      <p className={css.text}>Filters</p>
      <h4 className={css.filterTitle}>
        {/* <svg width={'32px'} height={'32px'} className={css.icon}>
          <use
            width={'32px'}
            height={'32px'}
            href={`/src/assets/images/icons-defs.svg#icon-van`}
          />
        </svg> */}
        Vehicle equipment
      </h4>
      <ul className={css.equipList}>
        <li className={css.equipItem}>
          <button className={css.filterBtn}>
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
        </li>
      </ul>
      <h4 className={css.filterTitle}>Vehicle type</h4>
      <ul className={css.equipList}>
        <li className={css.equipItem}>
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
        </li>
      </ul>
      <div className={css.searchBtnContainer}>
        {/* <button className={css.searchBtn}>
          Search
        </button> */}
        <Button text="Search" className={css.searchBtn} />
      </div>
    </>
  );
}
