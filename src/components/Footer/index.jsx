import logo from '../../assets/LOGO_KASA.svg';

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo de l'entreprise Kasa de couleur blanche sur fond noir." className="footer-logo" />
      <p>©2020 Kasa. All {"\n"}rights reserved</p>
    </footer>
  );
}

export default Footer;