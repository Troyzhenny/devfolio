import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";

const App = () => {
  return (
    <>
    <Router>
      <main className="padx-5">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/work" element={<Work />}></Route>
        </Routes>

        <Footer />
      </main>
    </Router>
    </>
  );
};

export default App;
