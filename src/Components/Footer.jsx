// components/Footer.jsx
import React from 'react';
import { AiFillMail } from 'react-icons/ai';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="footer rounded-md mb-10 p-10 bg-neutral text-neutral-content">
        <div className="flex flex-col md:flex-row items-center lg:gap-96 justify-between mx-auto">
          <div className="mb-4 md:mb-0">
            {/* Consider adding your logo if desired */}
            {/* <img src="/path/to/your/logo.png" alt="ACME Industries Ltd. Logo" className="h-10 w-10" /> */}
            <p className="text-lg font-bold">Al Emran</p>
            <p className="text-sm">MERN Stack Developer</p>
          </div>
          <nav>
            <header className="footer-title text-lg md:text-xl">Connect with Me</header>
            <div className="grid grid-flow-col gap-4">
              <a
                href="mailto:alemeranexpert@gmail.com"
                className="hover:text-gray-400"
                title="Email"
              >
                <AiFillMail size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/md-al-emran-akash/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
                title="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.facebook.com/al.emran.akash.75/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
                title="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://github.com/alemranakash"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
                title="GitHub"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
