import React from 'react';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from 'react-icons/ai';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={logo}
          alt="Founder"
        />
        <h2>Swapnanil mandal</h2>
        <p>
          Life is tragedy in short shots, but its a comedy in a long
          shot.
        </p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://www.youtube.com/">
            <AiFillLinkedin />
          </a>
          <a href="https://www.youtube.com/">
            <AiFillInstagram />
          </a>
          <a href="https://www.youtube.com/">
            <AiFillFacebook />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
