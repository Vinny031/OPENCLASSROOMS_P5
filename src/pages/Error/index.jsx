import { useEffect } from "react";

const Error = () => {
    useEffect(() => {
    document.title = "Erreur | Kasa";
    }, []);

    return (
        <div>
            <h1>ERROR 404</h1>
            <p>Page not found</p>
        </div>
    )
};
  
  export default Error;