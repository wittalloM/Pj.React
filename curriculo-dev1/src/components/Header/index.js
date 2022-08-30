import React from 'react';
import '../Header/header.css';

const Header = () => (
    <header>
        <nav classname="navegação">
            <div classname="perfil">
                <img src="https://via.placeholder.com/200px200" alt="foto.perfil" />
            </div>
            <ul>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#experience">Experiência</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#projects">Projetos</a></li>
            </ul>
        </nav>
    </header>
)

export default Header;