import { useNavigate } from 'react-router-dom';
import css from './HomePage.module.css';

export default function HomePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/catalog');
  };
  return (
    <main>
      <div className={css.container}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <h2 className={css.text}>
          You can find everything you want in our catalog
        </h2>
        <button className={css.viewBtn} type="button" onClick={handleClick}>
          View Now
        </button>
      </div>
    </main>
  );
}
