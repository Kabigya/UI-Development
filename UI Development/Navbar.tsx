import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-around">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About</Link>
    </nav>
  );
}
