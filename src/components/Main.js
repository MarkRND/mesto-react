function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
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
              src="#"
              alt="Изображение профиля"
            ></img>
          </button>
          <div className="profile__info">
            <div className="profile__editing">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button
                className="profile__edit-button hover-button"
                type="button"
                aria-label="Редактировать профиль"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__profession">Исследователь океана</p>
          </div>
        </div>
        <button
          className="profile__add-button hover-button"
          type="button"
          aria-label="Добавить"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements"></section>
    </main>
  );
}

export default Main;
