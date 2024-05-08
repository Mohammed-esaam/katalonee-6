import About from "./components/About";
import Navbar from "./components/navpar";
import Producdlist from "./components/Producdlist";
import ProductsList from "./components/Producdlist";
import Slider from "./components/slider";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/"element={<>
        <Slider/>
    <Producdlist/>
      </>
    }
    />
    <Route path="about" element = {<About/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
