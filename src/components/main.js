import React from "react";
import { Api } from "../utils/Api.js";

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

  React.useEffect(() => 
  {Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, /*items*/]) => {
    setUserName(data.name);
    setUserDescription(data.about);
    setUserAvatar(data.avatar)
    

    //cardList.renderItems(items);
  })
  .catch((err) => {console.log(err)});},[]);


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
        </ul>
      </section>
      <section className="image popup" id="image">
        <div className="image__wrapper">
          <button className="popup__close image__close">
          </button>
          <img className="image__file" src="#" alt="" />
          <p className="image__title" />
        </div>
      </section>
    </main>
    )
}

export default Main;