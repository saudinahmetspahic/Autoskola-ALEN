import React from 'react'
import './Kontakt.css'

import kontakt__img from '../../images/contact-us-banner.jpg'

function Kontakt() {
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
                    <form className="kontakt__obrazac__form" action="">
                        <input type="text" className="kontakt__obrazac__form__input" placeholder="Ime" />
                        <input type="text" className="kontakt__obrazac__form__input" placeholder="Prezime" />
                        <input type="text" className="kontakt__obrazac__form__input" placeholder="Broj telefona" />
                        <input type="text" className="kontakt__obrazac__form__input" placeholder="Email" />
                        <textarea type="text" className="kontakt__obrazac__form__input kontakt__obrazac__form__input--textarea" ></textarea>
                        <button className="btn kontakt__obrazac__form__btn">Pošalji</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Kontakt
