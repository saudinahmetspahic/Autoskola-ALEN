import React, { useState } from 'react'
import './PrijaviSe.css'

const kategorijeDefault = [
    {A: false},
    {B: false},
    {C1: false},
    {C: false},
    {CE: false},
    {D: false},
    {DE: false}
];

function PrijaviSe() {
    const [init, setInit] = useState(true)
    const [imePrezime, setImePrezime] = useState("")
    const [telefon, setTelefon] = useState("")
    const [email, setEmail] = useState("")
    const [mjestoStanovanja, setMjestoStanovanja] = useState("")
    const [datumRodjenja, setDatumRodjenja] = useState("")
    const [opis, setOpis] = useState("")
    const [polazeZa, setPolazeZa] = useState(kategorijeDefault)
    const [imaPolozeno, setImaPolozeno] = useState(kategorijeDefault)

  

    const initToggle = () => {
        setInit(!init);
    }

    const updatePolazeZa = (e, kategorija) => {
        var jelPolaze = e.target.checked;
        setPolazeZa([{ kategorija: jelPolaze }, ...polazeZa]);
    }
    const updateImaPolozene = (e, kategorija) => {
        var jelImaPolozeno = e.target.checked;
        //setImaPolozeno((trenutno) => [{[kategorija]: jelImaPolozeno}, ...trenutno]);
        var trazenaKategorija = polazeZa.find(f => [kategorija] === f);
        

        console.log(trazenaKategorija);
    }

    const posaljiPrijavu = (e) => {
        e.preventDefault();
        alert(imePrezime);
        console.log("Poslije slanja forme", imaPolozeno);
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
                    <form onSubmit={(e) => posaljiPrijavu(e)} className="prijavise__form">
                        <label className="prijavise__form__label" htmlFor="ime">Unesite Vaše puno ime i prezime npr. Alen Ahmetspahić</label>
                        <input onInput={(e) => setImePrezime(e.target.value)} value={imePrezime} className="prijavise__form__input" type="text" name="ime" placeholder="Unesite Vaše ime i prezime" />

                        <label className="prijavise__form__label" htmlFor="telefon">Unesite Vaš broj telefona [--- --- ---(-)]</label>
                        <input onInput={(e) => setTelefon(e.target.value)} value={telefon} className="prijavise__form__input" type="text" name="telefon" placeholder="Unesite Vaš broj telefona" />

                        <label className="prijavise__form__label" htmlFor="email">Unesite Vaš email (opcionalno)</label>
                        <input onInput={(e) => setEmail(e.target.value)} value={email} className="prijavise__form__input" type="text" name="email" placeholder="Unesite Vaš email" />

                        <label className="prijavise__form__label" htmlFor="mjesto">Unesite mjesto stanovanja npr. Zenica</label>
                        <input onInput={(e) => setMjestoStanovanja(e.target.value)} value={mjestoStanovanja} className="prijavise__form__input" type="text" name="mjesto" placeholder="Unesite mjesto stanovanja" />

                        <label className="prijavise__form__label" htmlFor="datumrodjenja">Unesite Vaš datum rođenja</label>
                        <input onInput={(e) => setDatumRodjenja(e.target.value)} value={datumRodjenja} className="prijavise__form__input" type="date" name="datumrodjenja" />

                        <label className="prijavise__form__label" htmlFor="zakategoriju">Odaberite kategoriju za koju polažete</label>
                        <div className="prijavise__form__checkboxs">
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="B">B</label><input onChange={(e) => updatePolazeZa(e, "B")} value={polazeZa["B"]} type="checkbox" className="prijavise__checkbox" name="B" id="B" /></div>
                        </div>

                        <label className="prijavise__form__label" htmlFor="posjedujekategoriju">Odaberite kategorije koje već posjedujete (ukoliko posjedujete)</label>
                        <div className="prijavise__form__checkboxs">
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="A">A</label><input onChange={(e) => updateImaPolozene(e, "A")} value={imaPolozeno["A"]} className="prijavise__checkbox" type="checkbox" name="A" id="A" /></div>
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="B">B</label><input onChange={(e) => updateImaPolozene(e, "B")} value={imaPolozeno["B"]} className="prijavise__checkbox" type="checkbox" name="B" id="B" /></div>
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="C1">C1</label><input onChange={(e) => updateImaPolozene(e, "C1")} value={imaPolozeno["C1"]} className="prijavise__checkbox" type="checkbox" name="C1" id="C1" /></div>
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="C">C</label><input onChange={(e) => updateImaPolozene(e, "C")} value={imaPolozeno["C"]} className="prijavise__checkbox" type="checkbox" name="C" id="C" /></div>
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="CE">CE</label><input onChange={(e) => updateImaPolozene(e, "CE")} value={imaPolozeno["CE"]} className="prijavise__checkbox" type="checkbox" name="CE" id="CE" /></div>
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="D">D</label><input onChange={(e) => updateImaPolozene(e, "D")} value={imaPolozeno["D"]} className="prijavise__checkbox" type="checkbox" name="D" id="D" /></div>
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="DE">DE</label><input onChange={(e) => updateImaPolozene(e, "DE")} value={imaPolozeno["DE"]} className="prijavise__checkbox" type="checkbox" name="DE" id="DE" /></div>
                        </div>

                        <label className="prijavise__form__label" htmlFor="opis">Dodajte opis (ukoliko je potrebno)</label>
                        <textarea onInput={(e) => setOpis(e.target.value)} value={opis} className="prijavise__form__input" name="opis"></textarea>



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
