import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <nav>
        <NavContent />
      </nav>
      <button
        className="navBtn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? 'navPhoneComes' : ''}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

export const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Swapnanil.</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Work
      </a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">
        Experience
      </a>
      <a onClick={() => setMenuOpen(false)} href="#services">
        Services
      </a>
      <a onClick={() => setMenuOpen(false)} href="#testimonial">
        Testimonial
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
    </div>

    <a href="mailto:me.swapnanil@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
