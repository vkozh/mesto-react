import React from "react";

export default function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__icon-close"
          type="button"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          className="popup__form"
          name={`popup${props.name}Form`}
          noValidate
        >
          {props.children}
          <button className="popup__submit-button" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}
