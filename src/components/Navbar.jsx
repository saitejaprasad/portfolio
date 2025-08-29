import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold tracking-wide">SaiTeja</h1>
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link to="/projects" className="hover:text-blue-400">
            Projects
          </Link>
          <Link to="/about" className="hover:text-blue-400">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="flex gap-6 p-4 bg-gray-800 text-white">
//       <Link to="/">Home</Link>
//       <Link to="/projects">Projects</Link>
//       <Link to="/about">About</Link>
//       <Link to="/contact">Contact</Link>
//     </nav>
//   );
// }
