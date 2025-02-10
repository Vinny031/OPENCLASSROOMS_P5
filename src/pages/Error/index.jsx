import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect } from "react";

const Error = () => {
    useEffect(() => {
    document.title = "Erreur | Kasa";
  }, []);

    return (
        <>
            <Header />
            <div>
                <h1>ERROR 404</h1>
                <p>Page not found</p>
            </div>
            <Footer />
        </>
    )
};

export default Error;