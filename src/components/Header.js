import logo from '../images/Vector.svg';

function Header(){
    return(
    <header className="header">
        <div className="header__wrapper">
            <img className="header__logo" alt="Around the US logo" src={logo} />
        </div>
  </header>
  )
}

export default Header;
