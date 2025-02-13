
const Button = ({ title, icon, style, imgStyle, hasBadge = false, onClick }) => {
  return (
    <button
      className={`category-btn ${title ? 'with-title' : ''}`}
      onClick={onClick}>

      <div style={style}
        className={`d-flex align-items-center justify-content-center`} >
        <img src={icon} alt="right" style={imgStyle} />
        {title && (<p>{title}</p>)}
      </div>
      {hasBadge && (<span className="btn-badge">
        <p>5</p>
      </span>)}
    </button>
  )
}
export default Button;