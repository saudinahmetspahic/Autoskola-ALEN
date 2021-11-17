import React, { useState } from 'react'
import './PrijaviSe.css'

function PrijaviSe() {
    const [init, setInit] = useState(true)

    const initToggle = () => {
        setInit(!init);
    }


    return (
        <div className="prijavise">
            {init &&
                <div className="init">
                    <p className="prijavise__header">Prijavi se</p>
                    <p className="prijavise__description">Ispuni formu i prijavi se online na jednostavan i brz način. Mi ti garantujemo kvalitetnu obuku i dobru saradnju.</p>
                    <button onClick={initToggle} className="btn prijavise__btn">Prijavi se</button>
                </div>
            }
            {init ||
                <div className="init">
                    <form className="prijavise__form">
                        <label className="prijavise__form__label" htmlFor="ime">Unesite Vaše puno ime i prezime npr. Alen Ahmetspahić</label>
                        <input className="prijavise__form__input" type="text" name="ime" placeholder="Unesite Vaše ime i prezime" />

                        <label className="prijavise__form__label" htmlFor="telefon">Unesite Vaš broj telefona [--- --- ---(-)]</label>
                        <input className="prijavise__form__input" type="text" name="telefon" placeholder="Unesite Vaš broj telefona" />

                        <label className="prijavise__form__label" htmlFor="email">Unesite Vaš email (opcionalno)</label>
                        <input className="prijavise__form__input" type="text" name="email" placeholder="Unesite Vaš email" />

                        <label className="prijavise__form__label" htmlFor="mjesto">Unesite mjesto stanovanja npr. Zenica</label>
                        <input className="prijavise__form__input" type="text" name="mjesto" placeholder="Unesite mjesto stanovanja" />

                        <label className="prijavise__form__label" htmlFor="datumrodjenja">Unesite Vaš datum rođenja</label>
                        <input className="prijavise__form__input" type="date" name="datumrodjenja" />

                        <label className="prijavise__form__label" htmlFor="zakategoriju">Odaberite kategoriju za koju polažete</label>
                        <div className="prijavise__form__checkboxs">
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="B">B</label><input type="checkbox" className="prijavise__checkbox" name="B" id="B" /></div>
                        </div>

                        <label className="prijavise__form__label" htmlFor="posjedujekategoriju">Odaberite kategorije koje već posjedujete (ukoliko posjedujete)</label>
                        <div className="prijavise__form__checkboxs">
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="A">A</label><input className="prijavise__checkbox" type="checkbox" name="A" id="A" /></div>
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="B">B</label><input className="prijavise__checkbox" type="checkbox" name="B" id="B" /></div>
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="C1">C1</label><input className="prijavise__checkbox" type="checkbox" name="C1" id="C1" /></div>
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="C">C</label><input className="prijavise__checkbox" type="checkbox" name="C" id="C" /></div>
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="CE">CE</label><input className="prijavise__checkbox" type="checkbox" name="CE" id="CE" /></div>
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="D">D</label><input className="prijavise__checkbox" type="checkbox" name="D" id="D" /></div>
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="DE">DE</label><input className="prijavise__checkbox" type="checkbox" name="DE" id="DE" /></div>
                        </div>

                        <label className="prijavise__form__label" htmlFor="opis">Dodajte opis (ukoliko je potrebno)</label>
                        <textarea className="prijavise__form__input" name="opis"></textarea>



                        <div className="prijavise__buttons">
                            <button className="btn">Prijavi se</button>
                            <button type="button" onClick={initToggle} className="btn">Odustani</button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}

export default PrijaviSe
