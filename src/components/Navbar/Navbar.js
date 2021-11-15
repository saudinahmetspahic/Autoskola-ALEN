import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { AiFillMail } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'
import { ImFacebook } from 'react-icons/im'
import { ImInstagram } from 'react-icons/im'

import logo from '../../images/logo.png';

function Navbar() {

    const alen_fb = "https://bs-ba.facebook.com/alen.ahmetspahic.31";
    const alen_ig = "https://bs-ba.facebook.com/alen.ahmetspahic.31";

    return (
        <div className="navbar">
            <div className="first">
                <div className="first__section">
                    <div className="first__section__col">
                        <ImLocation className="first__section__col__icon" />
                        <p className="first__section__col__p">Vranduk, Zenica</p>
                    </div>
                    <div className="first__section__col">
                        <AiFillMail className="first__section__col__icon" />
                        <p className="first__section__col__p">alen@autoskola.ba</p>
                    </div>
                </div>
                <div className="first__section">
                    <p className="first__section__p">Društvene mreže</p>
                    <a href={alen_fb} target="_blank" rel="noreferrer"><ImFacebook className="first__section__soc__icon" /></a>
                    <a href={alen_ig} target="_blank" rel="noreferrer"><ImInstagram className="first__section__soc__icon" /></a>
                </div>
            </div>
            <div className="second">
                <Link className="navbar__stavka" to="/"><img className="navbar__logo" src={logo} alt="logo" /></Link>
                <Link className="navbar__stavka" to="/">Pocetna</Link>
                <Link className="navbar__stavka" to="/autoskola">Autoškola</Link>
                <Link className="navbar__stavka" to="/instruktor">Instruktor</Link>
                <Link className="navbar__stavka" to="/testovi">Testovi</Link>
                <Link className="navbar__stavka" to="/kontakt">Kontakt</Link>
            </div>
        </div>
    )
}

export default Navbar
