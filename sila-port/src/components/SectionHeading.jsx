function SectionHeading({ id, title, label, children, actions }) {
  return (
    <div className="section-heading">
      <span className="section-heading__label">{label}</span>
      <div className="section-heading__row">
        <h2 id={id}>{title}</h2>
        {actions ? <div className="section-heading__actions">{actions}</div> : null}
      </div>
      {children ? <p className="section-heading__copy">{children}</p> : null}
    </div>
  )
}

export default SectionHeading
