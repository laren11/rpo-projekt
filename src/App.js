import { Unity, UnityContext, useUnityContext } from "react-unity-webgl";
import Igra from "./components/pages/Igra";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import Contact from "./components/pages/Contact";
import { Route, Routes, BrowserRouter as Router, Switch } from "react-router-dom";
import Leaderboard from "./components/pages/LeaderBoard";
import About from "./components/pages/About";
import "./fonts/Poppins-Bold.ttf"
import Footer from "./components/Footer";


function App() {

  return (
    <div style={{fontFamily: 'Custom'}}>
      <Router>
      <Navbar />
          <Routes>
            <Route path='/' element={<Igra />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
            <Route path='/about' element={<About />} />
          </Routes>
      <Footer />
      </Router>
    </div>

  );
}

export default App;
