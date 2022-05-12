import React from "react";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer container__footer">
      <p className="footer__text">&copy; {year} Mesto Russia</p>
    </footer>
  );
}
