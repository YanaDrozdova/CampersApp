import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <header className={css.container}>
      <nav className={css.nav}>
        <Link to="/" className={css.logo}>
          <svg width={'136px'} height={'15px'} className={css.mainIcon}>
            <use href={`/images/icons-defs.svg#icon-traveltrucks`} />
          </svg>
        </Link>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className={buildLinkClass}>
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
