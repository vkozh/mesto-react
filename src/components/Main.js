import React, { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "./Card";

export default function Main({
  onEditProfile,
  onEditAvatar,
  onAddPlace,
  onCardClick,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUser(), api.getCards()])
      .then(([{ name, about, avatar }, cards]) => {
        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar);
        setCards(cards);
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  }, []);

  return (
    <main>
      <section className="profile container__profile">
        <div className="profile__avatar-wrapper">
          <img className="profile__avatar" src={userAvatar} alt="Аватарка" />
          <button
            className="profile__edit-avatar-button"
            type="button"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__name">
            <h1 className="profile__name-text">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__about-me">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements container__elements">
        {cards.map((card) => (
          <Card card={card} key={card._id} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}
