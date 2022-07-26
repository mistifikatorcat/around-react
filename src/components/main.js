import React from "react";
import { Api } from "../utils/Api";
import Card from "./Card";

//initializing api

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "b451294b-44d9-464a-8874-2d4137a4eb3c",
    "Content-Type": "application/json"
  }
});

function Main(props){
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => 
  { api.getUserInfo()
  .then((data) => {
    setUserName(data.name);
    setUserDescription(data.about);
    setUserAvatar(data.avatar)
  })
  .catch((err) => {console.log(err);});

  api.getInitialCards()
  .then((items) => { 
    setCards(items);
  })
  .catch((err) => {console.log(err)});}, []);


    return(
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <div className="profile__card">
            <div className="profile__picture-wrapper">
              <img className="profile__picture" alt="Profile Picture" src={userAvatar} />
              <div className="profile__picture-overlay" onClick={props.onEditAvatarClick}/>
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-button" aria-label="edit" type="button" onClick={props.onEditProfileClick}>
              </button>
              <p className="profile__category">{userDescription}</p>
            </div>
          </div>
          <button className="profile__add-button" aria-label="add" type="button" onClick={props.onAddPlaceClick}>
          </button>
        </div>
      </section>
      {props.children}
      <section className="grid">
        <ul className="grid__cards">
          {cards.map((card) => (
            <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
    );
}

export default Main;