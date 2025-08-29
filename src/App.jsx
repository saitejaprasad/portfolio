import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Navigation bar can go here */}
        <Navbar />
        {/* <div className="flow-bg"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {/* </div> */}
    </Router>
  );
}

export default App;

// import "./App.css";

// function App() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
//       <h1 className="text-4xl font-bold mb-4">Hi, I'm SaiTeja</h1>
//       <p className="text-lg">Web Developer | Node.js Enthusiast</p>
//     </div>
//   );
// }

// export default App;
