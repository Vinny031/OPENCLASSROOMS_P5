import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ABOUT_PAGE from '../../assets/ABOUT_PAGE.png';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import About_Data from '../../data/about-collapse.json';
import { useEffect } from "react";


const About = () => {
  useEffect(() => {
      document.title = "À propos | Kasa";
    }, []);
  return (
    <>
    <Header />
    <div className="about">
      <Banner image={ABOUT_PAGE} alt="Un paysage de montagnes avec une rivière serpentant à travers, bordée d'arbres verdoyants et de cimes enneigées en arrière-plan."/>
      <div className="about-collapse-container">
        {About_Data.sections.map((item) => (
            <Collapse key={item.index} title={item.title} className="about-collapse">
              <p>{item.content}</p>
            </Collapse>
        ))}
      </div>
    </div>
    <Footer />
    </>
)
};

export default About;