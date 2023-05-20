import "./App.css";
// import HeroImage from "./components/HeroImage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-img">
      <img src='/images/hero-img-mount.png' alt='mount' className="mount"></img>
      <img src='/images/hero-img-tower.png' alt='tower' className="tower"></img>
      <Navbar />
    </div>
  );
}

export default App;
