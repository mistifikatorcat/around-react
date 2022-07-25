import React from "react";

export default function Card({card, onCardClick}){
 const {name, link} = card;

 function handleImageClick(){
  onCardClick(card);
 }


    return(
    <li className="grid__card">
        <div className="card">
          <div className="card__image" style={{ backgroundImage: `url(${link})` }} onClick={handleImageClick}/>
          <button type="button" className="card__delete" /*onClick={handleImageDelete}*/ />
          <div className="card__info">
            <h3 className="card__title">{name}</h3> 
            <div className="card__like">
              <button className="card__like-button" type="button">
              </button>
              <h4 className="card__like-counter">{card.likes.length}</h4>
            </div>
          </div>
        </div>
    </li>
    );
}