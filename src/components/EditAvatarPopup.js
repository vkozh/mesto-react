import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  buttonText,
}) {
  const avatar = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatar.current.value);
  }
  useEffect(() => {
    avatar.current.value = "";
  }, [isOpen]);
  return (
    <PopupWithForm
      isOpen={isOpen}
      name="edit-avatar"
      title="Обновить аватар"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText || "Сохранить"}
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
        ref={avatar}
      />
      <span className="popup__input-error avatar-link-input-error"></span>
    </PopupWithForm>
  );
}
