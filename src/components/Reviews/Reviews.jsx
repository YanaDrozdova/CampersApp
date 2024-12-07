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
      </ul>
    </div>
  );
}
