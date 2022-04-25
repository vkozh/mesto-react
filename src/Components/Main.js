import React from "react";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

export default function Main(props) {
  return (
    <main>
      <section className="profile container__profile">
        <div className="profile__avatar-wrapper">
          <img className="profile__avatar" src="/" alt="Аватарка" />
          <button
            className="profile__edit-avatar-button"
            type="button"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__name">
            <h1 className="profile__name-text">Жак Ив Кусто</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__about-me"></p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements container__elements"></section>

      <PopupWithForm
        isOpen={props.isEditProfilePopupOpen}
        name="edit-profile"
        title="Редактировать профиль"
        onClose={props.onClose}
      >
        <input
          id="name-input"
          className="popup__input popup__input_type_name"
          type="text"
          placeholder="Имя"
          name="name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__input-error name-input-error"></span>
        <input
          id="job-input"
          className="popup__input popup__input_type_job"
          type="text"
          placeholder="О себе"
          name="job"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__input-error job-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={props.isEditAvatarPopupOpen}
        name="edit-avatar"
        title="Обновить аватар"
        onClose={props.onClose}
      >
        <input
          id="avatar-link-input"
          className="popup__input popup__input_type_avatar-link"
          type="url"
          placeholder="Ссылка на картинку"
          name="link"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__input-error avatar-link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={props.isAddPlacePopupOpen}
        name="edit-add-card"
        title="Новое место"
        onClose={props.onClose}
      >
        <input
          id="title-input"
          className="popup__input popup__input_type_title"
          type="text"
          placeholder="Название"
          name="title"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__input-error title-input-error"></span>
        <input
          id="link-input"
          className="popup__input popup__input_type_link"
          type="url"
          placeholder="Ссылка на картинку"
          name="link"
          required
        />
        <span className="popup__input-error link-input-error"></span>
      </PopupWithForm>

      <ImagePopup />

      <PopupWithForm name="delete-card">
        <h2 className="popup__title popup__title_space_small">Вы уверены?</h2>
      </PopupWithForm>
    </main>
  );
}
