import React from "react";

export default function ImagePopup() {
  return (
    <div className="popup popup-full-img">
      <div className="popup-full-img__container">
        <button className="popup__icon-close" type="button"></button>
        <figure className="popup-full-img__img-wrapper">
          <img className="popup-full-img__img" src="/" alt="Описание" />
          <figcaption className="popup-full-img__text"></figcaption>
        </figure>
      </div>
    </div>
  );
}
