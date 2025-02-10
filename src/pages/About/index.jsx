import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
      document.title = "À propos | Kasa";
    }, []);
    return (
      <>
          <Header />
          <div>
            <h1>À propos</h1>;
          </div>
          <Footer />
      </>
    )
  };

  export default About;