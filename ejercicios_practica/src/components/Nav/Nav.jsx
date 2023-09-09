import React,{useContext} from 'react';
import style from './nav.module.css';
import { NavLink} from "react-router-dom";
import {PruebaContext} from "../../context/CurrentUserContext";

const Nav = () => {
    const { currentUser, setCurrentUser } = useContext(PruebaContext);
    return (
        <nav>
            <ul className={style.nav}>
                <li>
                    <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? "active" : "")}>Sobre Nosotros</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className={({ isActive }) => (isActive ? "active" : "")}>Contacto</NavLink>
                </li>
                {currentUser.name && currentUser.name !== "" ? (
                    <>
                        <li>
                            <span>{currentUser.name}</span>
                        </li>
                        <li>
                            <NavLink
                                to='/login'
                                className={({ isActive }) => (isActive ? "active" : "")}
                                onClick={() => setCurrentUser({ name: "", email: "" })}
                            >
                                Cerrar sesión
                            </NavLink>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <NavLink to='/login' className={({ isActive }) => (isActive ? "active" : "")}>LogIn</NavLink>
                        </li>
                    </>
                )}
                        
            </ul>
        </nav>
    );
};

export default Nav;