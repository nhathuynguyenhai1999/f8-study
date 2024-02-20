import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

function Footer() {
  return (
    <div className="bg-primary py-[40px] px-6">
      <h1 className="title text-26 mb-5">Below is some contact information.</h1>
      <p className="paragraph mb-2">+84.905.462.176</p>
      <p className="paragraph mb-4">Da Nang City, Viet Nam</p>
      <ul className="text-black text-20 flex gap-4 ml-4 mb-5">
        <a href="https://github.com/lt-chinh098406">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/l%C3%AA-trung-ch%C3%ADnh-768597225/">
          <AiFillLinkedin />
        </a>
        <a href="">
          <AiFillFacebook />
        </a>
        <a href="">
          <AiFillInstagram />
        </a>
      </ul>
      <p className="title text-26">
        Start by <span className="text-red underline">saying hi</span>
      </p>
    </div>
  );
}
export default Footer;
