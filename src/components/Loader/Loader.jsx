import { CircleLoader } from 'react-spinners';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.backdrop}>
      <CircleLoader color="#E44848" />
    </div>
  );
};
