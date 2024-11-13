import { Suspense, useRef } from 'react';
import { HiArrowSmLeft } from 'react-icons/hi';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import BookCamperForm from '../../components/BookCamperForm/BookCamperForm.jsx';
import css from './CamperDetailsPage.module.css';

const makeNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function CamperDetailsPage() {
  const location = useLocation();
  // console.log(location);

  const backLinkRef = useRef(location.state ?? '/catalog');
  // console.log(backLinkRef.current);

  return (
    <div className={css.container}>
      <div className={css.descritionWrap}>
        <div className={css.titleWrapper}>
          <Link to={backLinkRef.current} className={css.backLink}>
            <HiArrowSmLeft />
            Go back
          </Link>
          <h2>Mavericks</h2>
          <div className={css.revLocWrapper}>
            <div className={css.reviews}>
              <svg width={'16px'} height={'16px'} className={css.iconStar}>
                <use href={`/images/icons-defs.svg#icon-star`} />
              </svg>
              <p>4.4(2 Reviews)</p>
            </div>
            <div className={css.location}>
              <svg width={'16px'} height={'16px'} className={css.iconMap}>
                <use href={`/images/icons-defs.svg#icon-map`} />
              </svg>
              <p>Kyiv, Ukraine</p>
            </div>
          </div>
          <h2>€8000.00</h2>
        </div>
        <ul className={css.camperImgList}>
          <li className={css.camperImgItem}>
            <img
              className={css.camperImage}
              alt="Camper"
              src="/images/Pic-min.jpg"
            />
          </li>
          <li className={css.camperImgItem}>
            <img
              className={css.camperImage}
              alt="Camper"
              src="/images/Pic-min.jpg"
            />
          </li>
          <li className={css.camperImgItem}>
            <img
              className={css.camperImage}
              alt="Camper"
              src="/images/Pic-min.jpg"
            />
          </li>
          <li className={css.camperImgItem}>
            <img
              className={css.camperImage}
              alt="Camper"
              src="/images/Pic-min.jpg"
            />
          </li>
        </ul>
        <p className={css.text}>
          Embrace simplicity and freedom with the Mavericks panel truck, an
          ideal choice for solo travelers or couples seeking a compact and
          efficient way to explore the open roads. This no-frills yet reliable
          panel truck offers the essentials for a comfortable journey, making it
          the perfect companion for those who value simplicity and
          functionality.
        </p>
      </div>
      <div className={css.addInfoTitle}>
        <ul className={css.addInfoTitleList}>
          <li className={css.addInfoTitleItem}>
            <NavLink to="features" className={makeNavLinkClass}>
              <h3>Features</h3>
            </NavLink>
          </li>
          <li className={css.addInfoTitleItem}>
            <NavLink to="reviews" className={makeNavLinkClass}>
              <h3>Reviews</h3>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={css.addInfo}>
        <div className={css.leftPart}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
        <div className={css.rightPart}>
          <BookCamperForm />
        </div>
      </div>
    </div>
  );
}
