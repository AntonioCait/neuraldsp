import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {QuadCortex} from "./pages/QuadCortex";
import {Plugins} from "./pages/Plugins";
import {Careers} from "./pages/Careers";
import {CortexCloud} from "./pages/CortexCloud";
import {Home} from "./pages/Home";
import {Navbar} from "./components/Navbar";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quad-cortex" element={<QuadCortex />} />
        <Route path="/plugins" element={<Plugins />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/cortex-cloud" element={<CortexCloud />} />
      </Routes>
    </>
  );
}

export default App;
