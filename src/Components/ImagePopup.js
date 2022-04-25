import React from "react";

export default function ImagePopup(props) {
  return (
    <div className={`popup popup-full-img ${props.card ? "popup_opened" : ""}`}>
      <div className="popup-full-img__container">
        <button
          className="popup__icon-close"
          type="button"
          onClick={props.onClose}
        ></button>
        <figure className="popup-full-img__img-wrapper">
          <img
            className="popup-full-img__img"
            src={`${props.card.link}`}
            alt="Описание"
          />
          <figcaption className="popup-full-img__text">
            {props.card.name}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
