import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({ card, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardDeleteButtonClassName = `element__trash ${
    isOwn ? "" : "element__trash_hidden"
  }`;
  const cardLikeButtonClassName = `element__like ${
    isLiked ? "element__like_active" : ""
  }`;
  const handleClick = () => onCardClick(card);
  const handleLikeClick = () => onCardLike(card);

  return (
    <article className="element">
      <button className={cardDeleteButtonClassName} type="button"></button>
      <img
        className="element__img"
        src={card.link}
        alt="Описание"
        onClick={handleClick}
      />
      <div className="element__info">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-wrapper">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <span className="element__like-count">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}
