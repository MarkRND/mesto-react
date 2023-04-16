import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleDeleteClick = () => setIsDeletePopupOpen(true);

  const handleCardClick = (data) => setSelectedCard({ ...data, isOpen: true });

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeletePopupOpen(false);
    setSelectedCard(false);
  }
  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onClose={closeAllPopups}
        onCardClick={handleCardClick}
        onCardDelete={handleDeleteClick}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        title={"Редактировать профиль"}
        name={"edit"}
        buttonText={"Сохранить"}
        children={
          <>
            <input
              className="popup__input"
              id="name-input"
              name="name"
              type="text"
              placeholder="Имя пользователя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__input-error name-input-error" />

            <input
              className="popup__input"
              id="profession-input"
              name="profession"
              type="text"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__input-error profession-input-error" />
          </>
        }
      />
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        title={"Новое место"}
        name={"add"}
        buttonText={"Сохранить"}
        children={
          <>
            <input
              className="popup__input"
              id="title-input"
              name="name"
              type="text"
              placeholder="Имя пользователя"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__input-error title-input-error" />

            <input
              className="popup__input"
              id="link-input"
              name="link"
              type="url"
              placeholder="Ссылка на картинку"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__input-error profession-input-error" />
          </>
        }
      />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        title={"Обновить аватар"}
        name={"avatar"}
        buttonText={"Сохранить"}
        children={
          <>
            <input
              className="popup__input"
              id="avatar-input"
              name="avatar"
              type="url"
              placeholder="Ссылка на аватар пользователя"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__input-error avatar-input-error" />
          </>
        }
      />
      <PopupWithForm
        isOpen={isDeletePopupOpen}
        onClose={closeAllPopups}
        title={"Вы уверены?"}
        name={"delete"}
        buttonText={"Да"}
      />
      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
    </div>
  );
}

export default App;
