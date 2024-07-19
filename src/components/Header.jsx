import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">공연장 대관 서비스</Link>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/search">공연장 찾기</Link>
            <Link to="/host">공간 등록</Link>
            <Link to="/about">회사 소개</Link>
          </div>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;