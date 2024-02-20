import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

function Footer() {
  return (
    <div
      id="contact"
      className="bg-primary py-[35px] px-6 md:grid md:grid-cols-5 md:px-[200px]"
    >
      <div className="col-start-1 col-end-5">
        <h1 className="title text-24 md:text-36 mb-5">
          Some Contact Information.
        </h1>

        <p className="paragraph md:text-20 mb-2">Phone: (+84) 905 462 176</p>
        <p className="paragraph md:text-20 mb-2">
          Email: trungchinh211199@gmail.com
        </p>
        <p className="paragraph md:text-20 mb-6">
          Address: Da Nang City, Viet Nam
        </p>
        <p className="hidden md:block title text-24 md:text-36 mt-10">
          Start by{' '}
          <a
            className="text-red underline"
            href="mailto: trungchinh211199@gmail.com"
          >
            Contact me!
          </a>
        </p>
      </div>
      <ul className="text-black text-20 flex gap-4 ml-4 mb-6 md:flex-col md:gap-8">
        <a className="flex-[25%]" href="https://github.com/lt-chinh098406">
          <AiFillGithub size="40px" />
        </a>
        <a
          className="flex-[25%]"
          href="https://www.linkedin.com/in/l%C3%AA-trung-ch%C3%ADnh-768597225/"
        >
          <AiFillLinkedin size="40px" />
        </a>
        <a className="flex-[25%]" href="https://www.facebook.com/LT.Bin098406/">
          <AiFillFacebook size="40px" />
        </a>
        <a
          className="flex-[25%]"
          href="https://www.instagram.com/ltchinh098406/"
        >
          <AiFillInstagram size="40px" />
        </a>
      </ul>
      <p className="md:hidden title text-24">
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
