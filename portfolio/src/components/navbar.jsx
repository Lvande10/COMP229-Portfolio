import { Link } from "react-router-dom";
import LogoImg from "../assets/Logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  {
    /* Define navigation links for the navbar */
  }
  const navbarLocations = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Me" },
    { to: "/projects", label: "Projects" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: <span>Contact</span> },
  ];

  return (
    <Navbar maxWidth="full" onMenuOpenChange={setIsOpen} className="rounded-2xl bg-gray-700/20">
      <NavbarContent className="sm:hidden" justify="start">
        {/* Mobile menu toggle button */}
        <NavbarMenuToggle
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="sm:hidden [&>span]:hidden cursor-pointer"
          icon={
            isOpen ? (
              <HiX className="w-full h-full" />
            ) : (
              <HiMenu className="w-full h-full" />
            )
          }
        />
      </NavbarContent>
      {/* Logo Section */}
      <NavbarContent className="hidden sm:flex" justify="start">
        <NavbarBrand>
          <Link to="/">
            <img
              className="inline-flex filter invert dark:invert-0"
              src={LogoImg}
              alt="Logo"
              width="40"
              height="40"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop menu content */}
      <NavbarContent justify="center" className="hidden sm:flex gap-6">
        {navbarLocations.map(({ to, label }) => (
          <NavbarItem key={to}>
            <Link to={to}>{label}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu content */}
      <NavbarMenu>
        {navbarLocations.map(({ to, label }, index) => (
          <NavbarMenuItem key={`${to}-${index}`}>
            <Link className="w-full" color="primary" to={to} size="lg">
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarContent className="sm:hidden" justify="end">
        <ThemeToggle />
      </NavbarContent>
    </Navbar>
  );
}
