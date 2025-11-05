
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/90 backdrop-blur-custom header-shadow py-3"
          : "bg-white/10 backdrop-blur-sm border-b border-white/20 py-5"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-xl md:text-2xl font-bold font-display smooth-transition"
        >
          Kala Teja
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "link-underline py-2 smooth-transition",
                isActive ? "text-primary font-medium" : "text-foreground/80"
              )
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              cn(
                "link-underline py-2 smooth-transition",
                isActive ? "text-primary font-medium" : "text-foreground/80"
              )
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              cn(
                "link-underline py-2 smooth-transition",
                isActive ? "text-primary font-medium" : "text-foreground/80"
              )
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              cn(
                "link-underline py-2 smooth-transition",
                isActive ? "text-primary font-medium" : "text-foreground/80"
              )
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              cn(
                "link-underline py-2 smooth-transition",
                isActive ? "text-primary font-medium" : "text-foreground/80"
              )
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col space-y-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "w-6 h-0.5 bg-foreground transition-transform duration-300 ease-in-out",
              isMobileMenuOpen && "transform rotate-45 translate-y-2"
            )}
          ></span>
          <span
            className={cn(
              "w-6 h-0.5 bg-foreground transition-opacity duration-300 ease-in-out",
              isMobileMenuOpen && "opacity-0"
            )}
          ></span>
          <span
            className={cn(
              "w-6 h-0.5 bg-foreground transition-transform duration-300 ease-in-out",
              isMobileMenuOpen && "transform -rotate-45 -translate-y-2"
            )}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[64px] bg-background/95 backdrop-blur-lg shadow-lg z-40 border-b border-border">

        <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
          <NavLink
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              cn(
                "py-2 px-4 smooth-transition",
                isActive ? "text-primary font-medium" : "text-foreground/80"
              )
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              cn(
                "py-2 px-4 smooth-transition",
                isActive ? "text-primary font-medium" : "text-foreground/80"
              )
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              cn(
                "py-2 px-4 smooth-transition",
                isActive ? "text-primary font-medium" : "text-foreground/80"
              )
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/resume"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              cn(
                "py-2 px-4 smooth-transition",
                isActive ? "text-primary font-medium" : "text-foreground/80"
              )
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              cn(
                "py-2 px-4 smooth-transition",
                isActive ? "text-primary font-medium" : "text-foreground/80"
              )
            }
          >
            Contact
          </NavLink>
        </div>
        </div>
      )}
    </header>
  );
};
