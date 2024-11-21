import css from './Button.module.css';
import clsx from 'clsx';

export default function Button({ text, type = 'button', onClick, className }) {
  return (
    <button
      type={type}
      className={clsx(css.button, className)}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
