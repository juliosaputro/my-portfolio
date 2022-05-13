import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import {AnimatePresence} from 'framer-motion'
import Nav from "./components/Work/Nav";
import CustomCursor from "./components/Work/CustomCursor";

function App() {
  return (
    <>
    <Router>
    <GlobalStyles/>
    <CustomCursor/>
    <Nav/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Work" element={<Work/>} />
          <Route exact path="/About" element={<About/>} />
          <Route exact path="*" element={<Home/>} />
        </Routes>
    </Router>
      {/* <Router>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
      </AnimatePresence>
      </Router> */}
    </>
  );
}

export default App;
