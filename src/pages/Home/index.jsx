import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
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
    </>
  )
};

export default Home;
