import "./App.css";
import CuveeList from "./components/CuveeList";
import Accueil from "./components/Accueil";
import Prestations from "./components/Prestations";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <h1>Accueil</h1>
      <Accueil />
      <CuveeList />
      <Prestations />
      <Contact />
    </div>
  );
};

export default App;
