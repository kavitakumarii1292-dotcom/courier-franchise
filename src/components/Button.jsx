import { Link } from 'react-router-dom';

/**
 * Reusable Button component supporting internal routing, external links, and standard buttons.
 * 
 * @param {'primary' | 'navy' | 'outline' | 'outline-white'} variant
 * @param {'sm' | 'md' | 'lg'} size
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  block = false,
  onClick,
  type = 'button',
  disabled = false,
  id,
  ...props
}) {
  const variantClass = `btn-${variant}`;
  const sizeClass = size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : '';
  const blockClass = block ? 'btn-block' : '';
  const combinedClass = `btn ${variantClass} ${sizeClass} ${blockClass} ${className}`.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={size === 'lg' ? 20 : 16} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={size === 'lg' ? 20 : 16} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass} id={id} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClass} id={id} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClass}
      onClick={onClick}
      disabled={disabled}
      id={id}
      {...props}
    >
      {content}
    </button>
  );
}
