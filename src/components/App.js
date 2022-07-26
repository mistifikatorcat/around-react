
import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';

import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  //const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ visibility: false });

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
      link: card.link
    });
  }

  /*function handleImageDelete(){
    setIsDeletePopupOpen(true);
    
  }*/

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ visibility: false });
    //setIsDeletePopupOpen(false);
  }
  return (
    <div>
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onCardClick={handleImageClick}
      >
        <PopupWithForm
          name="avatar"
          title="Change Avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="form__fieldset">
            <input className="form__input" type="url" id="avatarInput" placeholder="Image Link" required />
            <span className="form__input-error avatarInput-error" />
          </fieldset>
        </PopupWithForm>
        <PopupWithForm
          name="edit"
          title="Edit Profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
          <fieldset className="form__fieldset">
            <input className="form__input" type="text" id="name" placeholder="Name" required minLength="2" maxLength="40" />
            <span className="form__input-error name-error"></span>
            <input className="form__input" type="text" id="category" placeholder="About me" required minLength="2" maxLength="200" />
            <span className="form__input-error category-error"></span>
          </fieldset>
        </PopupWithForm>
        <PopupWithForm
          name="add"
          title="New Place"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>
          <fieldset className="form__fieldset">
            <input className="form__input" type="text" id="title" placeholder="Title" required minLength="1" maxLength="30" />
            <span className="form__input-error title-error"></span>
            <input className="form__input" type="url" id="link" placeholder="Image Link" required />
            <span className="form__input-error link-error"></span>
          </fieldset>
        </PopupWithForm>
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
    </div>
  );
}

export default App;
