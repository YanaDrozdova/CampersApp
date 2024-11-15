import { Suspense, useEffect, useRef } from 'react';
import { HiArrowSmLeft } from 'react-icons/hi';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import BookCamperForm from '../../components/BookCamperForm/BookCamperForm.jsx';
import css from './CamperDetailsPage.module.css';
import { getCamperById } from '../../redux/campers/operations.js';
import { selectCamperInfo } from '../../redux/campers/selectors.js';

const makeNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function CamperDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/catalog');
  // console.log(location);
  // console.log(backLinkRef.current);

  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  const camperInfo = useSelector(selectCamperInfo);
  console.log(camperInfo);

  useEffect(() => {
    if (!camperInfo && id) {
      dispatch(getCamperById(id)); // Завантажити дані про кемпер, якщо вони не збережені в Redux
    }
  }, [dispatch, id, camperInfo]);

  return (
    <div className={css.container}>
      <div className={css.descritionWrap}>
        <div className={css.titleWrapper}>
          <Link to={backLinkRef.current} className={css.backLink}>
            <HiArrowSmLeft />
            Go back
          </Link>
          <h2>{camperInfo.name}</h2>
          <div className={css.revLocWrapper}>
            <div className={css.reviews}>
              <svg width={'16px'} height={'16px'} className={css.iconStar}>
                <use href={`/images/icons-defs.svg#icon-star`} />
              </svg>
              <p>{camperInfo.rating}( Reviews)</p>
            </div>
            <div className={css.location}>
              <svg width={'16px'} height={'16px'} className={css.iconMap}>
                <use href={`/images/icons-defs.svg#icon-map`} />
              </svg>
              <p>{camperInfo.location}</p>
            </div>
          </div>
          <h2>€{camperInfo.price}</h2>
        </div>
        <ul className={css.camperImgList}>
          {camperInfo.gallery.map((photo, index) => (
            <li key={index} className={css.camperImgItem}>
              <img
                className={css.camperImage}
                alt="Camper"
                src={photo.original}
              />
            </li>
          ))}
          {/* <li className={css.camperImgItem}>
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
          </li> */}
        </ul>
        <p className={css.text}>{camperInfo.description}</p>
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
