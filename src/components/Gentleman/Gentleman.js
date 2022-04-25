const Gentleman = ({
  name,
  status,
  profession,
  twitter,
  picture,
  alternativeText,
  action,
}) => {
  return (
    <li className="gentleman" onClick={action}>
      <div className="geetleman__avatar-container">
        <img
          src={picture}
          alt={alternativeText}
          className="gentleman__avatar"
        />
        <span className="gentleman__initial">{`${picture[0].toUpperCase()}`}</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span>
            {status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>
            {twitter}
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </li>
  );
};

export default Gentleman;
