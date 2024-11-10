import { useNavigate } from 'react-router-dom';
import css from './HomePage.module.css';
import Button from '../../components/Button/Button.jsx';

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
        <Button className={css.viewBtn} onClick={handleClick} text="View Now" />
      </div>
    </main>
  );
}
