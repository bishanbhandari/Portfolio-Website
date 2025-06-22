import React from 'react';

const Footer = () => {
  return (
    <footer className="font-bold py-5 px-4 relative border-t mt-10 pt-5 flex flex-wrap justify-between items-center">
            <p>©{new Date().getFullYear()} Bishan Bhandari</p>
            <h6>All Right Reserved</h6>
    </footer>
  )
}

export default Footer;