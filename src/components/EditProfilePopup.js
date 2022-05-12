import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
  buttonText,
}) {
  const [user, setUser] = useState({ name: "", about: "" });
  const currentUser = useContext(CurrentUserContext);
  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });
  useEffect(() => {
    setUser({ name: currentUser.name, about: currentUser.about });
  }, [currentUser, isOpen]);
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(user.name, user.about);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="edit-profile"
      title="Редактировать профиль"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText || "Сохранить"}
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
        value={user.name || ""}
        onChange={handleChange}
      />
      <span className="popup__input-error name-input-error"></span>
      <input
        id="job-input"
        className="popup__input popup__input_type_job"
        type="text"
        placeholder="О себе"
        name="about"
        minLength="2"
        maxLength="200"
        required
        value={user.about || ""}
        onChange={handleChange}
      />
      <span className="popup__input-error job-input-error"></span>
    </PopupWithForm>
  );
}
