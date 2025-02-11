import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ERROR from "../../assets/404_ERROR.svg";
import { useEffect } from "react";
import { Link } from 'react-router-dom';


const Error = () => {
    useEffect(() => {
    document.title = "Erreur | Kasa";
  }, []);

    return (
        <>
            <Header />
            <div className="error-page">
                <img src={ERROR} alt="Erreur 404, page non trouvée de couleur rouge." className="error_logo" id="error_logo"/>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </>
    )
};

export default Error;