import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import css from './CamperItem.module.css';

export default function CamperItem() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/catalog/:id/features');

  return (
    <>
      <div className={css.imgWrapper}>
        <img
          className={css.camperImage}
          alt="Camper"
          src="/src/assets/images/Pic-min.jpg"
        />
      </div>
      <div className={css.camperInfoWrapper}>
        <div className={css.titleWrapper}>
          <div className={css.titleText}>
            <h2>Mavericks</h2>
            <h2>€8000.00</h2>
          </div>
          <svg width={'26px'} height={'24px'} className={css.icon}>
            <use href={`/src/assets/images/icons-defs.svg#icon-heart`} />
          </svg>
        </div>
        <div className={css.revLocWrapper}>
          <div className={css.reviews}>
            <svg width={'16px'} height={'16px'} className={css.iconStar}>
              <use href={`/src/assets/images/icons-defs.svg#icon-star`} />
            </svg>
            <p>4.4(2 Reviews)</p>
          </div>
          <div className={css.location}>
            <svg width={'16px'} height={'16px'} className={css.iconMap}>
              <use href={`/src/assets/images/icons-defs.svg#icon-map`} />
            </svg>
            <p>Kyiv, Ukraine</p>
          </div>
        </div>
        <p className={css.text}>
          Embrace simplicity and freedom with the Mavericks panel truck...
        </p>
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
        </ul>
        <Button
          text="Show more"
          className={css.showMoreBtn}
          onClick={handleClick}
        />
      </div>
    </>
  );
}
