import React from "react";
export default function PopupWithForm(props){
    const enable = `${props.isOpen ? 'popup_enabled' : ''}`;
return(
    <section 
    className={`${props.name} popup ${enable}`} 
    id={`${props.name}`}
    >
      <div className={`${props.name}__container`}>
        <button className={`popup__close ${props.name}__close`} onClick={props.onClose}>
        </button>
        <div className={`${props.name}__form`}>
          <h3 className={`${props.name}__title`}>{props.title}</h3>
          <form className="form popup__form" id={`${props.name}Form`} noValidate>
            {props.children}
            <fieldset className="form__fieldset">
               {/*<input className="form__input" type="url" id="${props.name}Input" placeholder="Image Link" required />
              <span className="form__input-error ${props.name}Input-error" />
            </fieldset>
<fieldset className="form__fieldset"> */}
              <button 
              className="form__button form__button_inactive"
               type="submit" 
               disabled>Save</button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>);
}
