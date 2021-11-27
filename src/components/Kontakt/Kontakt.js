import React, { useState } from 'react'
import './Kontakt.css'

import { send } from 'emailjs-com';

import kontakt__img from '../../images/contact-us-banner.jpg'

function Kontakt() {
    const [ime, setIme] = useState("")
    const [prezime, setPrezime] = useState("")
    const [brojTelefona, setBrojTelefona] = useState("")
    const [email, setEmail] = useState("")
    const [opis, setOpis] = useState("")

    const PosaljiNoviKontakt = (e) => {
        e.preventDefault();
        var imeiprezime = ime + " " + prezime;
        const templateParams = {
            korisnik_ime: imeiprezime,
            korisnik_email: email,
            korisnik_telefon: brojTelefona,
            korisnik_opis: opis
        };
        send('service_apagqtv', 'template_zxv1leq', templateParams, 'user_YE5AldepJRXipFb0L8pNY');
    }

    return (
        <div className="kontakt">
            <div className="kontakt__header">
                <img className="kontakt__header__image" src={kontakt__img} alt="" />
                <p className="kontakt__header__description">Ukoliko imate dodatnih pitanja ispunite formu i odgovorit ćemo u najbržem mogućem roku.</p>
            </div>
            <div className="kontakt__content">
                <div className="kontakt__obrazac">
                    <h3 className="kotakt__obrazac__header">Kontakt obrazac</h3>
                    <p className="kotakt__obrazac__description">Kontaktirati nas možete putem kontakt obrasca ispod ili putem navedenih kontakt informacija.</p>
                    <form onSubmit={PosaljiNoviKontakt} className="kontakt__obrazac__form" action="">
                        <input value={ime} onChange={(e) => setIme(e.target.value)} type="text" className="kontakt__obrazac__form__input" placeholder="Ime" />
                        <input value={prezime} onChange={(e) => setPrezime(e.target.value)} type="text" className="kontakt__obrazac__form__input" placeholder="Prezime" />
                        <input value={brojTelefona} onChange={(e) => setBrojTelefona(e.target.value)} type="text" className="kontakt__obrazac__form__input" placeholder="Broj telefona" />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="kontakt__obrazac__form__input" placeholder="Email" />
                        <textarea value={opis} onChange={(e) => setOpis(e.target.value)} type="text" className="kontakt__obrazac__form__input kontakt__obrazac__form__input--textarea" ></textarea>
                        <button className="btn kontakt__obrazac__form__btn">Pošalji</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Kontakt
