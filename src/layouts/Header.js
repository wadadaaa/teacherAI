import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // handle scroll
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      aria-label="header"
      className={`fixed top-0 left-0 z-20 flex w-full items-center gap-4 transition ${
        isScrolled
          ? "bg-slate-800/80 shadow-md backdrop-blur-md backdrop-saturate-150 backdrop-filter duration-300 ease-in-out"
          : "bg-transparent"
      }`}
      onScroll={handleScroll}
    >
      <nav className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <span className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
          TeacherAI
        </span>
      </nav>
    </header>
  );
};

export default Header;
