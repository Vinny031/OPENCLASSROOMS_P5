import { useEffect } from "react";

const About = () => {
    useEffect(() => {
      document.title = "À propos | Kasa";
    }, []);
    return <h1>À propos</h1>;
  };
  
  export default About;