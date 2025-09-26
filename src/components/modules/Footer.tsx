import React from "react";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-slate-800">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
        <p>&copy; {new Date().getFullYear()} Flowzy AI. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
