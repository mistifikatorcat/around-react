import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import api from "../utils/api";
import EditProfilePopup from "./EditProfilePopup";
import Footer from "./Footer";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  //const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    visibility: false
  });
  const [currentUser, setCurrentUser] = React.useState('');
  const [cards, setCards] = React.useState([]);

  //getting info from the server

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getInitialCards()
      .then((items) => {
        setCards(items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //event handlers

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleImageClick(card) {
    setSelectedCard({
      ...selectedCard,
      visibility: true,
      name: card.name,
      link: card.link,
    });
  }

  /*function handleDeleteClick(){
    setIsDeletePopupOpen(true);
    
  }*/

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({
      visibility: false
    });
    //setIsDeletePopupOpen(false);
  }

  //like card handler

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    })
    .catch((err) => {
      console.log(err);
    });
  }

  //delete card handler

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        const updatedCards = cards.filter((currentCard) => {
          return currentCard._id !== card._id;
        });
        setCards(updatedCards);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //updating user info

  function handleUpdateUser(data) {
    api
      .setUserInfo(data)
      .then((updatedData) => {
        setCurrentUser(updatedData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //updating profile pic

  function handleUpdateAvatar(data) {
    api
      .editProfilePic(data)
      .then((updatedData) => {
        setCurrentUser(updatedData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //uploading a new card

  function handleAddPlaceSubmit(data) {
    api
      .createCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          /*event handlers go here*/
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleImageClick}
          onLikeClick={handleCardLike}
          onDeleteClick={handleCardDelete}
          cardsArray={cards}
        >
          <EditAvatarPopup
            /*form parameters*/
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlaceSubmit={handleAddPlaceSubmit}
          />
          {/* <PopupWithForm
      name="delete"
      title="Are you sure?"
      isOpen={isDeletePopupOpen}
      onClose={closeAllPopups}>
        <fieldset className="form__fieldset">
          <button className="form__button" type="submit" id="submitButton">Yes</button>
        </fieldset>
  </PopupWithForm>*/}
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </Main>
        <Footer />
      </CurrentUserContext.Provider>
  );
}

export default App;
