import Header from "../../components/Header";
import HOME_PAGE from "../../assets/HOME_PAGE.png"
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Accueil | Kasa";
  }, []);

  return (
    <div className="homepage_container">
      <Header />
      <Banner image={HOME_PAGE} text="Chez vous, partout et ailleurs" alt="Paysage côtier avec des rochers, des arbres et l'océan." />
      <Card />
      <Footer />
    </div>
  )
};

export default Home;
