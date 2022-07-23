/*function props.onEditAvatarClick(){
  const avatar = document.querySelector('#avatar');
  avatar.classList.add('popup_enabled');
  }
  
  function props.onEditProfileClick(){
    const edit =  document.querySelector('#edit');
  edit.classList.add('popup_enabled');
  }
  
  function props.onAddPlaceClick(){
    const add = document.querySelector('#add');
  add.classList.add('popup_enabled');
  }*/

function Main(props){
    return(
        <main className="content">
    <section className="profile">
      <div className="profile__wrapper">
        <div className="profile__card">
          <div className="profile__picture-wrapper">
            <img className="profile__picture" alt="Profile Picture" src="#" />
            <div className="profile__picture-overlay" onClick={props.onEditAvatarClick}/>
          </div>
          <div className="profile__info">
            <h1 className="profile__name" />
            <button className="profile__edit-button" aria-label="edit" type="button" onClick={props.onEditProfileClick}>
            </button>
            <p className="profile__category" />
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