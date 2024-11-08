import css from './Button.module.css';

export default function Button({
  text,
  type = 'button',
  onClick,
  className = '',
}) {
  return (
    <button
      type={type}
      className={`${css.button} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
