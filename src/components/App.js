import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

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
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(`Ошибка ${err}`));

    api
      .getCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  }, []);

  function handleUpdateUser(name, about) {
    api
      .editProfile(name, about)
      .then((data) => setCurrentUser(data))
      .catch((err) => console.log(`Ошибка ${err}`));
    closeAllPopups();
  }

  function handleUpadteAvatar(avatar) {
    api
      .changeAvatar(avatar)
      .then((data) => setCurrentUser(data))
      .catch((err) => console.log(`Ошибка ${err}`));
    closeAllPopups();
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) =>
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        )
      );
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((c) => c !== card));
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  }

  function handleAddPlaceSubmit({ name, link }) {
    api
      .addCard(name, link)
      .then((newCard) => setCards([newCard, ...cards]))
      .catch((err) => console.log(`Ошибка ${err}`));
    closeAllPopups();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpadteAvatar}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          name="edit-add-card"
          title="Новое место"
          onClose={closeAllPopups}
          buttonText="Создать"
          onAddPlace={handleAddPlaceSubmit}
        />

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
