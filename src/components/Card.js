import React from "react";

export default function Card(props) {
  const { name } = props.card;

  function handleImageClick() {
    props.onCardClick(props.card);
  }


  return (
    <li className="grid__card">
      <div className="card">
        <div className="card__image" style={{ backgroundImage: `url(${props.card.link})` }} onClick={handleImageClick} />
        <button type="button" className="card__delete" /*onClick={handleImageDelete}*/ />
        <div className="card__info">
          <h3 className="card__title">{name}</h3>
          <div className="card__like">
            <button className="card__like-button" type="button">
            </button>
            <h4 className="card__like-counter">{props.card.likes.length}</h4>
          </div>
        </div>
      </div>
    </li>
  );
} 