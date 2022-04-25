import React from "react";

export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <article className="element">
      <button className="element__trash" type="button"></button>
      <img
        className="element__img"
        src={props.card.link}
        alt="Описание"
        onClick={handleClick}
      />
      <div className="element__info">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-wrapper">
          <button className="element__like" type="button"></button>
          <span className="element__like-count">
            {Object.keys(props.card.likes).length}
          </span>
        </div>
      </div>
    </article>
  );
}
