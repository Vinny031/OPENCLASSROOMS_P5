import Header from "../../components/Header";
import { useEffect } from "react";

const Property = () => {
  useEffect(() => {
    document.title = "Location | Kasa";
  }, []);

  return (
    <>
      <Header />
    </>
  )
};

export default Property;
