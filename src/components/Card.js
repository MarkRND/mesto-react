function Card({ onCardClick, data, onCardDelete }) {
  const handleImageClick = () => onCardClick(data);
  const handleDeleteClick = () => onCardDelete(data);

  return (
    <div className="element">
      <img
        className="element__image"
        src={data.link}
        alt={data.name}
        onClick={handleImageClick}
      />
      <button
        type="button"
        className="element__basket"
        aria-label="Корзина"
        onClick={handleDeleteClick}
      ></button>
      <div className="element__caption">
        <h2 className="element__name">{data.name}</h2>
        <div className="element__like-place">
          <button
            className="element__button element__button_active"
            aria-label="Понравилось"
          ></button>
          <p className="element__like-quantity"></p>
        </div>
      </div>
    </div>
  );
}

export default Card;
