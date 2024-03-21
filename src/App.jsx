import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import {PhotoProvider} from "./context/PhotoProvider.jsx";
import {Footer} from "./components/Footer.jsx";

const App = () => {

  return (
    <PhotoProvider>
      <>
        <Navbar/>
        <main className="container">
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
            <Route
              path="/favoritos"
              element={<Favorites/>}
            />
            <Route
              path="*"
              element={<NotFound/>}
            />
          </Routes>
        </main>
        <Footer/>
      </>
    </PhotoProvider>
  );
};

const NotFound = () => {
  return <h1>Página no Encontrada</h1>;
};
export default App;