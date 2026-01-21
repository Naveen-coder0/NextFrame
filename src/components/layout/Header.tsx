import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" },
  { name: "Process", path: "/process" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  const location = useLocation();
  const navigate = useNavigate();

  /* Detect login state */
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  /* Scroll effect */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-elevated"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:shadow-glow">
                <span className="text-primary-foreground font-bold text-xl">
                  N
                </span>
              </div>
              <span className="font-bold text-xl">NextFrame</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {!user ? (
                <>
                  {/* Logged OUT */}
                  <Link
                    to="/login"
                    className="px-4 py-2 rounded-lg text-sm font-medium border border-border/60"
                  >
                    Login
                  </Link>

                  <Button asChild size="sm" className="btn-glow">
                    <Link to="/login">Sign Up</Link>
                  </Button>
                </>
              ) : (
                <>
                  {/* Logged IN */}
                  <Button asChild variant="outline" size="sm">
                    <Link to="/dashboard">Dashboard</Link>
                  </Button>

                  <Button size="sm" onClick={logout}>
                    Logout
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-40 lg:hidden"
          >
            <div className="glass-card-elevated mx-4 rounded-2xl">
              <div className="p-6 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-4 py-3 rounded-xl hover:bg-muted/50"
                  >
                    {link.name}
                  </Link>
                ))}

                {!user ? (
                  <>
                    <Link
                      to="/login"
                      className="block w-full text-center px-4 py-3 rounded-xl border"
                    >
                      Login
                    </Link>
                    <Button asChild className="w-full btn-glow">
                      <Link to="/login">Sign Up</Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button asChild className="w-full">
                      <Link to="/dashboard">Dashboard</Link>
                    </Button>
                    <Button className="w-full" onClick={logout}>
                      Logout
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
