import { useSelector } from 'react-redux';
import css from './Reviews.module.css';
import { selectCamperInfo } from '../../redux/campers/selectors.js';
import ReviewStarList from '../starList/ReviewStarList.jsx';

export default function Reviews() {
  const { reviews } = useSelector(selectCamperInfo);

  return (
    <div className={css.container}>
      <ul className={css.reviewsList}>
        {reviews.map((review, index) => (
          <li key={index} className={css.reviewsItem}>
            <div className={css.reviewerTitle}>
              <div className={css.reviewerAvatar}>
                <p className={css.avatarText}>
                  {review.reviewer_name.charAt(0)}
                </p>
              </div>
              <div className={css.reviewerInfo}>
                <p className={css.reviewerName}>{review.reviewer_name}</p>
                <ReviewStarList rating={review.reviewer_rating} />
              </div>
            </div>
            <p>{review.comment}</p>
          </li>
        ))}
        {/* <li className={css.reviewsItem}>
          <div className={css.reviewerTitle}>
            <div className={css.reviewerAvatar}>
              <p className={css.avatarText}>
                {reviews[0].reviewer_name.charAt(0)}
              </p>
            </div>
            <div className={css.reviewerInfo}>
              <p className={css.reviewerName}>{reviews[0].reviewer_name}</p>
              <ReviewStarList rating={reviews[0].reviewer_rating} />
            </div>
          </div>
          <p>{reviews[0].comment}</p>
        </li> */}
        {/* <li className={css.reviewsItem}>
          <div className={css.reviewerTitle}>
            <div className={css.reviewerAvatar}>
              <p className={css.avatarText}>B</p>
            </div>
            <div className={css.reviewerInfo}>
              <p className={css.reviewerName}>Bob</p>
              <ul className={css.starList}>
                <li className={css.starItem}>
                  <svg width={'16px'} height={'16px'} className={css.iconStar}>
                    <use href={`/images/icons-defs.svg#icon-star`} />
                  </svg>
                </li>
                <li className={css.starItem}>
                  <svg width={'16px'} height={'16px'} className={css.iconStar}>
                    <use href={`/images/icons-defs.svg#icon-star`} />
                  </svg>
                </li>
                <li className={css.starItem}>
                  <svg width={'16px'} height={'16px'} className={css.iconStar}>
                    <use href={`/images/icons-defs.svg#icon-star`} />
                  </svg>
                </li>
                <li className={css.starItem}>
                  <svg width={'16px'} height={'16px'} className={css.iconStar}>
                    <use href={`/images/icons-defs.svg#icon-star`} />
                  </svg>
                </li>
                <li className={css.starItem}>
                  <svg width={'16px'} height={'16px'} className={css.iconStar}>
                    <use href={`/images/icons-defs.svg#icon-star`} />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          <p>
            A decent option for solo travel. The Mavericks provided a
            comfortable stay, but the lack of bathroom facilities was a
            drawback. Good for short trips where simplicity is preferred.
          </p>
        </li> */}
      </ul>
    </div>
  );
}
