import React from 'react'
import logoPath from '../images/logo.svg';

export default function Header() {
  return (
    <header className="header container__header">
    <img
      className="header__logo"
      src={logoPath}
      alt="Логотип"
    />
  </header>
  )
}
