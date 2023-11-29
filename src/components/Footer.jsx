import React from 'react';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from 'react-icons/ai';
import avatar from '../assets/avatar.jpg';

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={avatar} alt="Founder" />
        <h2>Swapnanil mandal</h2>
        <p>
          Life is tragedy in short shots, but its a comedy in a long
          shot.
        </p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://www.linkedin.com/in/swapnanilmandal/" target='blank'>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/" target='blank'>
            <AiFillInstagram />
          </a>
          <a href="https://www.facebook.com/me.swapnanil.mandal" target='blank'>
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
