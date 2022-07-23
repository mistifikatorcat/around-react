
import React from 'react';
import '../index.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);

  function handleEditAvatarClick(){
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick(){
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick(){
    setIsAddPlacePopupOpen(true);
  }
  
  function handleDeleteClick(){
    setIsDeletePopupOpen(true);
    
  }

  function closeAllPopups(){
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeletePopupOpen(false);
  }
  return(
  <div>
    <Header />
    <Main
    onEditAvatarClick={handleEditAvatarClick}
    onEditProfileClick={handleEditProfileClick}
    onAddPlaceClick={handleAddPlaceClick}
    onDeleteClick={handleDeleteClick}>
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
          <input className="form__input" type="text" id="name" placeholder="Name" required  minlength="2" maxlength="40"/>
          <span className="form__input-error name-error"></span>
          <input className="form__input" type="text" id="category" placeholder="About me" required minlength="2" maxlength="200"/>
          <span className="form__input-error category-error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
      name="add"
      title="New Place"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}>
        <fieldset className="form__fieldset">
          <input className="form__input" type="text" id="title" placeholder="Title" required minlength="1" maxlength="30" />
          <span className="form__input-error title-error"></span>
          <input className="form__input" type="url" id="link" placeholder="Image Link" required />
          <span className="form__input-error link-error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
      name="delete"
      title="Are you sure?"
      isOpen={isDeletePopupOpen}
      onClose={closeAllPopups}>
        <fieldset class="form__fieldset">
          <button class="form__button" type="submit" id="submitButton">Yes</button>
        </fieldset>
      </PopupWithForm>
    </Main>
    <Footer />
    <template id="card" />
  </div>
);
}

export default App;
