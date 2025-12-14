import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="py-8 mt-4">
      <p className="text-center text-text-color">
        Design & Developed with love by{" "}
        <span className="font-bold">ubaidur</span>
      </p>
      <p className="text-center text-text-color">
        © {year}. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
