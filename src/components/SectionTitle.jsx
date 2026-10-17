/**
 * Reusable Section Title component with badge, heading, and subtitle.
 */
export default function SectionTitle({
  badge,
  badgeVariant = 'orange',
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClass = align === 'left' ? 'text-left' : '';

  return (
    <div className={`section-header ${alignClass} ${className}`.trim()}>
      {badge && (
        <span className={`badge badge-${badgeVariant}`}>
          {badge}
        </span>
      )}
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
