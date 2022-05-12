import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function DeleteCardPopup({
  onClose,
  isOpen,
  deleteCard,
  card,
  buttonText,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    deleteCard(card);
  }
  return (
    <PopupWithForm
      name="delete-card"
      title="Вы уверены?"
      buttonText={buttonText || "Да"}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
}
