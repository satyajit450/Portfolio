
import { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="site-header">
            <a className="brand" href="#home">
                SATYAJIT<span>.</span>
            </a>

            <button
                className="menu-toggle"
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? '✕' : '☰'}
            </button>

            <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
                <a href="#work" onClick={closeMenu}>Work</a>
                <a href="#focus" onClick={closeMenu}>Focus</a>
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#toolkit" onClick={closeMenu}>Toolkit</a>
            </nav>

            <a className="header-button" href="#contact">
                LET'S CONNECT <span>↗</span>
            </a>
        </header>
    );
}
