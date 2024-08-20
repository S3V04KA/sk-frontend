import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.scss";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Card({
  title,
  img,
  date,
  phoneNumber,
  email,
  description,
  onClick,
}: {
  title: string;
  img: string;
  date: string;
  phoneNumber: string;
  email: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <div className="card">
      <button onClick={onClick}>
        <div
          className="card-header"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="card-body">
          <div className="card-title-container">
            <div className="card-title">{title}</div>
            <FontAwesomeIcon icon={faChevronRight} size="2x" color="#36B93F" />
          </div>
          <div className="card-date">{date}</div>
          <div className="card-phone">тел: {phoneNumber}</div>
          <div className="card-email">email: {email}</div>
          <div className="card-description">{description}</div>
        </div>
      </button>
    </div>
  );
}

export default Card;
