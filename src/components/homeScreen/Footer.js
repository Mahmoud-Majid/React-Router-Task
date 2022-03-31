import React from "react";

const Footer = () => {
  return (
    <footer className='p-5 bg-success text-center'>
      <p className="m-0 " style={{ color: "white" }} >Copy Rights Reserved &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;