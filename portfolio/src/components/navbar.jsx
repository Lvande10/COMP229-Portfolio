
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
        <nav className="">
            <ul className="flex space-x-4 p-4">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Me</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}