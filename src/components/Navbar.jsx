import { MenuIcon, XIcon } from "lucide-react";
import { navLinks } from "../data/data";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScroll(window.scrollY > 10)
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <>
      <nav className={`fixed top-0 z-20 px-auto w-full transition-all duration-300 ${scroll ? 'bg-white/60 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between font-medium py-4 mx-auto max-w-7xl">
          <a href="/">
            <img src="/public/assets/logo.svg" alt="logo" />
          </a>

          {/* desktop navigation links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(item => (
                <a key={item.name} href={item.href} className="hover:text-zinc-600">
                    {item.name}
                </a>
            ))}
          </div>
          <a href="#booking-process" className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition">
            Book a table 
          </a>

          <button onClick={() => setMobileOpen(true)} className="md:hidden bg-zinc-800 text-white p-2 rounded-md aspect-square cursor-pointer">
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* Mobile navigation drawer */}
      <div className={`flex flex-col item-center justify-center p-8 fixed inset-0 bg-white/70 backdrop-blur-md z-40 transform transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center space-y-6 font-medium">
            {navLinks.map(item => (
                <a onClick={() => setMobileOpen(false)} key={item.name} href={item.href} className="text-2xl text-zinc-800 hover:text-orange-500 transition">
                    {item.name}
                </a>
            ))}
            <button onClick={() => setMobileOpen(false)} className="bg-zinc-800 text-white p-2 rounded-md aspect-square cursor-pointer">
                <XIcon />
            </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
