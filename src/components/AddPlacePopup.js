import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlace,
  buttonText,
}) {
  const [newCard, setNewCard] = useState({ name: "", link: "" });
  const handleChange = (e) =>
    setNewCard({ ...newCard, [e.target.name]: e.target.value });
  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(newCard);
  }
  return (
    <PopupWithForm
      isOpen={isOpen}
      name="edit-add-card"
      title="Новое место"
      onClose={onClose}
      buttonText={buttonText || "Создать"}
      onSubmit={handleSubmit}
    >
      <input
        id="title-input"
        className="popup__input popup__input_type_title"
        type="text"
        placeholder="Название"
        name="name"
        minLength="2"
        maxLength="30"
        required
        value={newCard.name}
        onChange={handleChange}
      />
      <span className="popup__input-error title-input-error"></span>
      <input
        id="link-input"
        className="popup__input popup__input_type_link"
        type="url"
        placeholder="Ссылка на картинку"
        name="link"
        required
        value={newCard.link}
        onChange={handleChange}
      />
      <span className="popup__input-error link-input-error"></span>
    </PopupWithForm>
  );
}
