import { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onClose,
  onCardDelete,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInfoUser()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => console.log(err));

    api
      .getCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <main>
      <section className="profile">
        <div className="profile__user">
          <button
            className="profile__avatar"
            type="button"
            aria-label="Редактировать аватар"
            onClick={onEditAvatar}
          >
            <img
              className="profile__image"
              src={userAvatar}
              alt="Изображение профиля"
            ></img>
          </button>
          <div className="profile__info">
            <div className="profile__editing">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button hover-button"
                type="button"
                aria-label="Редактировать профиль"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__profession">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button hover-button"
          type="button"
          aria-label="Добавить"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {cards.map((cardData) => (
          <Card
            key={cardData._id}
            data={cardData}
            onCardClick={onCardClick}
            onClose={onClose}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
