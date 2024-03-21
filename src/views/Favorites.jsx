import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext.jsx";
import Gallery from "../components/Gallery.jsx";

const Favorites = () => {
  const { favPhotos } = useContext(PhotoContext);

  return (
    <div className="container">
      <h1 className="my-4">
        {favPhotos.length > 0
          ? `Fotos Favoritas: ${favPhotos.length}`
          : "No hay Fotos Favoritas"}
      </h1>
      {favPhotos.length > 0 && <Gallery photos={favPhotos} />}
    </div>
  );
};

export default Favorites;