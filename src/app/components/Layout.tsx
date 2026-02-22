import { Outlet, Link, useLocation } from "react-router";
import { AnimatedBackground } from "./AnimatedBackground";
import { ScrollToTop } from "./ScrollToTop";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/skills", label: "Compétences" },
    { path: "/projects", label: "Projets" },
    { path: "/blog", label: "Blog" },
    { path: "/journey", label: "Parcours" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen relative">
      <ScrollToTop />
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl"><img src="/favicon-96x96.png" alt="" /></span>
              </div>
              <span className="text-white font-semibold hidden sm:block">Merveille Tsafack</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    location.pathname === link.path
                      ? "bg-purple-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900 border-t border-purple-500/20"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                      location.pathname === link.path
                        ? "bg-purple-600 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative bg-gray-900/50 backdrop-blur-sm border-t border-purple-500/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2026 Merveille Tsafack. Futur ingénieur logiciel passionné.</p>
            <p className="mt-2 text-sm">Construit avec React, Motion, et une passion pour l'excellence technique.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}