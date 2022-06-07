import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Anand kumar ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
