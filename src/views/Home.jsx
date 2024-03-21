import Gallery from "../components/Gallery";
import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext.jsx";

const Home = () => {
  const { photos } = useContext(PhotoContext);

  return (
    <div className="App">
      <h1>Natural Pic</h1>
      {photos.length > 0 ? (
        <Gallery photos={photos} />
      ) : (
        <p>Cargando fotos...</p>
      )}
    </div>
  );
};

export default Home;