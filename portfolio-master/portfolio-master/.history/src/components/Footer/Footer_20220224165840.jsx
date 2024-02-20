import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

function Footer() {
  return (
    <div id="contact" className="bg-primary py-[35px] px-6">
      <h1 className="title text-26 mb-5">Some Contact Information.</h1>
      <p className="paragraph mb-2">Phone: (+84) 905 462 176</p>
      <div className="">
        <p className="paragraph mb-2">Email: trungchinh211199@gmail.com</p>
        <p className="paragraph mb-6">Address: Da Nang City, Viet Nam</p>
        <ul className="text-black text-20 flex gap-4 ml-4 mb-6">
          <a className="flex-[25%]" href="https://github.com/lt-chinh098406">
            <AiFillGithub size="40px" />
          </a>
          <a
            className="flex-[25%]"
            href="https://www.linkedin.com/in/l%C3%AA-trung-ch%C3%ADnh-768597225/"
          >
            <AiFillLinkedin size="40px" />
          </a>
          <a
            className="flex-[25%]"
            href="https://www.facebook.com/LT.Bin098406/"
          >
            <AiFillFacebook size="40px" />
          </a>
          <a
            className="flex-[25%]"
            href="https://www.instagram.com/ltchinh098406/"
          >
            <AiFillInstagram size="40px" />
          </a>
        </ul>
      </div>
      <p className="title text-26">
        Start by{' '}
        <a
          className="text-red underline"
          href="mailto: trungchinh211199@gmail.com"
        >
          Contact me!
        </a>
      </p>
    </div>
  );
}
export default Footer;
