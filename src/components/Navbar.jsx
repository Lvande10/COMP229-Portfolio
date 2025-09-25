import { Link, useLocation } from "react-router-dom";
import LogoImg from "../assets/Logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import { useState, useEffect } from "react";
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
  const location = useLocation();

  // Close the mobile menu when navigating to a new page
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Define navigation links for the navbar 
  const navbarLocations = [
    { to: "/", label: "Home" },
    { to: "/About", label: "About Me" },
    { to: "/Projects", label: "Projects" },
    { to: "/Services", label: "Services" },
    { to: "/Contact", label: "Contact" },
  ];

  return (
    <Navbar maxWidth="full" isMenuOpen={isOpen} onMenuOpenChange={setIsOpen} className="mb-10 rounded-2xl bg-gray-700/20">
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

      {/* Logo */}
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

      {/* Desktop menu */}
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

      {/* Mobile menu */}
      <NavbarMenu className="pt-6 mt-4 scrollbar-hide space-y-4">
        {navbarLocations.map(({ to, label }, index) => (
          <NavbarMenuItem key={`${to}-${index}`} className="mx-auto">
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
