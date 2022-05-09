import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleEditCardTrashClick = () => setIsDeleteCardPopupOpen(true);
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard(null);
  };
  const handleCardClick = (card) => setSelectedCard(card);

  useEffect(() => {
    api
      .getUser()
      .then(({ name, about, avatar, _id }) => {
        setCurrentUser({ name, about, avatar, _id });
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          name="edit-profile"
          title="Редактировать профиль"
          onClose={closeAllPopups}
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
          isOpen={isEditAvatarPopupOpen}
          name="edit-avatar"
          title="Обновить аватар"
          onClose={closeAllPopups}
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
          isOpen={isAddPlacePopupOpen}
          name="edit-add-card"
          title="Новое место"
          onClose={closeAllPopups}
          buttonText="Создать"
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

        <ImagePopup onClose={closeAllPopups} card={selectedCard} />

        <PopupWithForm
          name="delete-card"
          title="Вы уверены?"
          buttonText="Да"
          onClose={closeAllPopups}
          isOpen={isDeleteCardPopupOpen}
        ></PopupWithForm>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
