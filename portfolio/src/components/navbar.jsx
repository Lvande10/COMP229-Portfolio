import { Link, useLocation } from "react-router-dom";
import LogoImg from "../assets/Logo.png";

export default function NavBar() {
  const location = useLocation();

  const navbarLocations = [
    { to: "/", label: <><img
                className="mx-auto inline-block mr-1"
                width="25"
                height="25"
                src={LogoImg}
                alt="Lucas Vandermaarel Logo"
              /><span>Home</span></>},
    { to: "/about", label: "About Me" },
    { to: "/projects", label: "Projects" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: <span>Contact</span> }
  ]

  return (
    <>
      <nav className="navbar rounded-2xl justify-items-center lg:mb-24">
        <ul className="flex w-full md:w-auto flex-col md:flex-row lg:space-x-4 md:space-y-0 space-y-2 rounded-2xl bg-white/10">
          {navbarLocations.map(({ to, label }) => (
            <li
              key={to}
              className={`px-2 ${location.pathname === to ? "bg-white/20" : ""} transition-color duration-200`}
            >
              <Link to={to} className="block w-full h-full">{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
