import logo from '../../assets/LOGO_KASA.svg';

const Header = () => {
    return (
      <header>
        <nav>
          <img src={logo} alt="Logo de l'entreprise Kasa de couleur rouge." />
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>
    );
  };

  export default Header;