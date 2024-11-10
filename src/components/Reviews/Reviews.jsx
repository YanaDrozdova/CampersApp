import css from './Reviews.module.css';

export default function Reviews() {
  return (
    <div className={css.container}>
      <ul className={css.reviewsList}>
        <li className={css.reviewsItem}>
          <div className={css.reviewerTitle}>
            <div className={css.reviewerAvatar}>
              <p className={css.avatarText}>A</p>
            </div>
            <div className={css.reviewerInfo}>
              <p className={css.reviewerName}>Alice</p>
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
            The Mavericks panel truck was a perfect choice for my solo road
            trip. Compact, easy to drive, and had all the essentials. The
            kitchen facilities were sufficient, and the overall experience was
            fantastic.
          </p>
        </li>
        <li className={css.reviewsItem}>
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
        </li>
      </ul>
    </div>
  );
}
