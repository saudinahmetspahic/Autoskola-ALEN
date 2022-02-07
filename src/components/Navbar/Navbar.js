import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { AiFillMail } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'
import { ImFacebook } from 'react-icons/im'
import { ImInstagram } from 'react-icons/im'

import logo from '../../images/logo.jpg';
import { ImMenu3 } from 'react-icons/im'

function Navbar() {
    const [menuOpened, setMenuOpened] = useState(false)
    const menuRef = useRef()

    const alen_fb = "https://www.facebook.com/Autoskola-ALEN-106837360920628";
    const alen_ig = "https://www.instagram.com/autoskolaalen/";


    const openMobMenu = () => {
        if (!menuOpened) {
            menuRef.current.classList.add("openedMenu");
            setMenuOpened(true);
        }
        else {
            closeMobMenu();
        }
    }

    const closeMobMenu = () => {
        if (!menuOpened) return;
        menuRef.current.classList.remove("openedMenu");
        setMenuOpened(false);
    }


    return (
        <div className="navbar">
            <div className="first">
                <div className="first__section">
                    <div className="first__section__col">
                        <ImLocation className="first__section__col__icon" />
                        <p className="first__section__col__p">Sarajevska 75, Zenica</p>
                    </div>
                    <div className="first__section__col">
                        <AiFillMail className="first__section__col__icon" />
                        <p className="first__section__col__p">autoskolaalen20@hotmail.com | alenahmetspahic009@gmail.com</p>
                    </div>
                </div>
                <div className="first__section">
                    <p className="first__section__p">Društvene mreže</p>
                    <a href={alen_fb} target="_blank" rel="noreferrer"><ImFacebook className="first__section__soc__icon" /></a>
                    <a href={alen_ig} target="_blank" rel="noreferrer"><ImInstagram className="first__section__soc__icon" /></a>
                </div>
            </div>
            <div ref={menuRef} className="second">
                <Link className="navbar__stavka__image" to="/"><img className="navbar__logo" src={logo} alt="logo" /></Link>
                <div className="navbar__stavke">
                    <Link onClick={closeMobMenu} className="navbar__stavka" to="/">Pocetna</Link>
                    <Link onClick={closeMobMenu} className="navbar__stavka" to="/autoskola">Autoškola</Link>
                    <Link onClick={closeMobMenu} className="navbar__stavka" to="/instruktor">Instruktor</Link>
                    <Link onClick={closeMobMenu} className="navbar__stavka" to="/testovi">Testovi</Link>
                    <Link onClick={closeMobMenu} className="navbar__stavka" to="/kontakt">Kontakt</Link>
                </div>
                <ImMenu3 onClick={openMobMenu} className="meni" />
                {/* <img ref={menuIconRef} onClick={openMobMenu} className="meni" src={meni} alt="" /> */}
            </div>
        </div>
    )
}

export default Navbar
