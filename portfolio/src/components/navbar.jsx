import { Link, useLocation } from "react-router-dom";
import homeImg from "../assets/home.png";

export default function NavBar() {
  const location = useLocation();

  const navbarLocations = [
    { to: "/", label: <img
                className="mx-auto lg:mx-4"
                width="25"
                height="25"
                src={homeImg}
                alt="Lucas Vandermaarel Logo"
              /> },
    { to: "/about", label: "About Me" },
    { to: "/projects", label: "Projects" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" }
  ]

  return (
    <>
      <nav className="navbar rounded-2xl justify-items-center">
        <ul className="flex w-full md:w-auto flex-col md:flex-row lg:space-x-4 lg:space-y-0 space-y-2 rounded-4xl bg-white/10">
          {navbarLocations.map(({ to, label }) => (
            <li
              key={to}
              className={`px-2 ${location.pathname === to ? "bg-white/20" : ""} transition-color duration-200`}
            >
              <Link to={to}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
