import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import css from './CamperItem.module.css';
import FeaturesList from '../FeaturesList/FeaturesList.jsx';
import { useDispatch } from 'react-redux';
import { getCamperById } from '../../redux/campers/operations.js';
import { useEffect, useState } from 'react';

export default function CamperItem({ camper }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Отримуємо список сподобаних кемперів з localStorage
  const getLikedCampers = () => {
    const likedCampers = localStorage.getItem('likedCampers');
    return likedCampers ? JSON.parse(likedCampers) : [];
  };

  const [liked, setLiked] = useState(getLikedCampers().includes(camper.id));

  // Функція для оновлення стану у localStorage
  const updateLikedCampers = id => {
    const likedCampers = getLikedCampers();
    if (likedCampers.includes(id)) {
      // Якщо кемпер вже є, видаляємо його зі списку
      const newLikedCampers = likedCampers.filter(camperId => camperId !== id);
      localStorage.setItem('likedCampers', JSON.stringify(newLikedCampers));
    } else {
      // Додаємо кемпер до списку
      likedCampers.push(id);
      localStorage.setItem('likedCampers', JSON.stringify(likedCampers));
    }
  };

  const handleHeartClick = () => {
    setLiked(prev => !prev);
    updateLikedCampers(camper.id);
  };

  const handleClick = async () => {
    await dispatch(getCamperById(camper.id));
    navigate(`/catalog/${camper.id}/features`);
  };

  useEffect(() => {
    setLiked(getLikedCampers().includes(camper.id));
  }, [camper.id]);

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
            <h2>€{camper.price.toFixed(2)}</h2>
          </div>
          <svg
            width={'26px'}
            height={'24px'}
            className={css.icon}
            onClick={handleHeartClick}
            style={{
              fill: liked ? '#E44848' : '#101828',
              stroke: liked ? '#E44848' : '#101828',
            }}
          >
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
