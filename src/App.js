import { Unity, UnityContext, useUnityContext } from "react-unity-webgl";
import Igra from "./components/Igra";
import Navbar from "./components/Navbar";
import './App.css';
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Igra />
      <Footer />
    </div>
  );
}

export default App;
