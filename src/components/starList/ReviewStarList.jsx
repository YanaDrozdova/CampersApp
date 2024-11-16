import css from './ReviewStarList.module.css';

export default function ReviewStarList({ rating }) {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  const renderStars = () => {
    let stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <li key={`full-${i}`} className={css.starItem}>
          <svg width={'16px'} height={'16px'} className={css.iconStar}>
            <use href="/images/icons-defs.svg#icon-star" />
          </svg>
        </li>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <li key={`empty-${i}`} className={css.starItem}>
          <svg width={'16px'} height={'16px'} className={css.iconStarEmpty}>
            <use href="/images/icons-defs.svg#icon-star" />
          </svg>
        </li>
      );
    }

    return stars;
  };

  return <ul className={css.starList}>{renderStars()}</ul>;
}
