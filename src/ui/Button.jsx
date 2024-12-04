import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-full bg-lime-400 text-sm font-semibold uppercase tracking-widest text-stone-700 transition-colors duration-300 hover:bg-lime-600 focus:outline-none focus:ring focus:ring-lime-600 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + 'py-3 px-4 md:py-4 md:px-6',
    small: base + 'py-2 md:px-5 md:py-2.5 text-xs',
    round:
      'inline-block text-sm rounded-full bg-lime-400 text-sm font-semibold text-stone-700 transition-colors duration-300 hover:bg-lime-600 focus:outline-none focus:ring focus:ring-lime-600 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3',
    secondary:
      'focus:text-stone-800 text-sm py-2.5 px-4 md:py-3.5 md:px-6 inline-block rounded-full border-2 border-stone-200 text-sm font-semibold uppercase tracking-widest text-stone-600 transition-colors duration-300 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed',
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
