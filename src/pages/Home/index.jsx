import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Accueil | Kasa";
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <Card />
      <Footer />
    </>
  )
};

export default Home;
