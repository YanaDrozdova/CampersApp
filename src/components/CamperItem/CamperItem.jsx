import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import css from './CamperItem.module.css';
import FeaturesList from '../FeaturesList/FeaturesList.jsx';

export default function CamperItem({ camper }) {
  const navigate = useNavigate();
  const handleClick = () => navigate('/catalog/:id/features');

  return (
    <>
      <div className={css.imgWrapper}>
        <img
          className={css.camperImage}
          alt="Camper"
          src={camper.gallery[0].original}
        />
      </div>
      <div className={css.camperInfoWrapper}>
        <div className={css.titleWrapper}>
          <div className={css.titleText}>
            <h2>{camper.name}</h2>
            <h2>€{camper.price}</h2>
          </div>
          <svg width={'26px'} height={'24px'} className={css.icon}>
            <use href={`/images/icons-defs.svg#icon-heart`} />
          </svg>
        </div>
        <div className={css.revLocWrapper}>
          <div className={css.reviews}>
            <svg width={'16px'} height={'16px'} className={css.iconStar}>
              <use href={`/images/icons-defs.svg#icon-star`} />
            </svg>
            <p>
              {camper.rating}({camper.reviews.length} Reviews)
            </p>
          </div>
          <div className={css.location}>
            <svg width={'16px'} height={'16px'} className={css.iconMap}>
              <use href={`/images/icons-defs.svg#icon-map`} />
            </svg>
            <p>{camper.location}</p>
          </div>
        </div>
        <p className={css.text}>{camper.description}</p>
        {/* <ul className={css.featuresList}>
          <li className={css.featureItem}>
            <svg width={'20px'} height={'20px'} className={css.featureIcon}>
              <use href={`/images/icons-defs.svg#icon-diagram`} />
            </svg>
            <p className={css.itemText}>Automatic</p>
          </li>
          <li className={css.featureItem}>
            <svg width={'20px'} height={'20px'} className={css.featureIcon}>
              <use href={`/images/icons-defs.svg#icon-fuel`} />
            </svg>
            <p className={css.itemText}>Petrol</p>
          </li>
          <li className={css.featureItem}>
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
          </li>
        </ul> */}
        <FeaturesList camper={camper} />
        <Button
          text="Show more"
          className={css.showMoreBtn}
          onClick={handleClick}
        />
      </div>
    </>
  );
}
