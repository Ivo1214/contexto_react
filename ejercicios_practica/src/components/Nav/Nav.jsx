import React from 'react';
import style from './nav.module.css';
import { NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className={style.nav}>
                <li>
                    <NavLink to='/'>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>Sobre Nosotros</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contacto</NavLink>
                </li>
                        
            </ul>
        </nav>
    );
};

export default Nav;