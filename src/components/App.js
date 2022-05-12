import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeleteCardPopup from "./DeleteCardPopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [buttonText, setButtonText] = useState();
  const [deleteCard, setDeleteCard] = useState({});
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleCardTrashClick = (card) => {
    setDeleteCard(card);
    setIsDeleteCardPopupOpen(true);
  };
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
      .editProfile(name, about, renderLoading)
      .then((data) => setCurrentUser(data))
      .catch((err) => console.log(`Ошибка ${err}`));
    closeAllPopups();
  }

  function handleUpadteAvatar(avatar) {
    api
      .changeAvatar(avatar, renderLoading)
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
    closeAllPopups();
  }

  function handleAddPlaceSubmit({ name, link }) {
    api
      .addCard(name, link, renderLoading)
      .then((newCard) => setCards([newCard, ...cards]))
      .catch((err) => console.log(`Ошибка ${err}`));
    closeAllPopups();
  }

  function renderLoading(isLoading) {
    isLoading ? setButtonText("Сохранение...") : setButtonText();
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
          onCardTrash={handleCardTrashClick}
          cards={cards}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          buttonText={buttonText}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpadteAvatar}
          buttonText={buttonText}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          name="edit-add-card"
          title="Новое место"
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          buttonText={buttonText}
        />

        <ImagePopup onClose={closeAllPopups} card={selectedCard} />

        <DeleteCardPopup
          onClose={closeAllPopups}
          deleteCard={handleCardDelete}
          isOpen={isDeleteCardPopupOpen}
          card={deleteCard}
          buttonText={buttonText}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
