import React, { useState } from 'react'
import './PrijaviSe.css'

import { send } from 'emailjs-com';

const kategorijeDefault = [];

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

    const posaljiPrijavu = (e) => {
        e.preventDefault();
        var kategorije_polozenoIma = "";
        imaPolozeno.forEach(ip => kategorije_polozenoIma += ' ' + ip);
        kategorije_polozenoIma = kategorije_polozenoIma.trimStart();
        var kategorije_polazeZa = "";
        polazeZa.forEach(pz => kategorije_polazeZa += ' ' + pz);
        kategorije_polazeZa = kategorije_polazeZa.trimStart();
        const templateParams = {
            korisnik_ime: imePrezime,
            korisnik_email: email,
            korisnik_telefon: telefon,
            korisnik_mjestostanovanja: mjestoStanovanja,
            korisnik_datumrodjenja: datumRodjenja.toString("dd mmm yyyy"),
            korisnik_imapolozeno: kategorije_polozenoIma,
            korisnik_polazeza: kategorije_polazeZa,
            korisnik_opis: opis
        };
        send('service_apagqtv', 'template_tzni1d1', templateParams, 'user_YE5AldepJRXipFb0L8pNY');
    }

    const PostaviKategorijeZaPolaganje = (kategorija, vrijednost) => {
        var newObj = polazeZa.filter(f => f !== kategorija);
        if (vrijednost === true) {
            newObj.push(kategorija);
        }
        setPolazeZa(newObj);
    }

    const PostaviKategorijeKandidatPosjeduje = (kategorija, vrijednost) => {
        var newObj = imaPolozeno.filter(f => f !== kategorija);
        if (vrijednost === true) {
            newObj.push(kategorija);
        }
        setImaPolozeno(newObj);
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
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="B">B</label><input onChange={(e) => PostaviKategorijeZaPolaganje('B', e.target.checked)} type="checkbox" className="prijavise__checkbox" name="B" id="B" /></div>
                            {/* test <input onChange={(e) => PostaviKategorijeZaPolaganje('B', e.target.checked)} value='' type="checkbox" className="prijavise__checkbox" name="B" id="B" /> */}
                        </div>
                        <label className="prijavise__form__label" htmlFor="posjedujekategoriju">Odaberite kategorije koje već posjedujete (ukoliko posjedujete)</label>
                        <div className="prijavise__form__checkboxs">
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="A">A</label><input onChange={(e) => PostaviKategorijeKandidatPosjeduje('A', e.target.checked)} className="prijavise__checkbox" type="checkbox" name="A" id="A" /></div>
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="B">B</label><input onChange={(e) => PostaviKategorijeKandidatPosjeduje('B', e.target.checked)} className="prijavise__checkbox" type="checkbox" name="B" id="B" /></div>
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="C1">C1</label><input onChange={(e) => PostaviKategorijeKandidatPosjeduje('C1', e.target.checked)} className="prijavise__checkbox" type="checkbox" name="C1" id="C1" /></div>
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="C">C</label><input onChange={(e) => PostaviKategorijeKandidatPosjeduje('C', e.target.checked)} className="prijavise__checkbox" type="checkbox" name="C" id="C" /></div>
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="CE">CE</label><input onChange={(e) => PostaviKategorijeKandidatPosjeduje('CE', e.target.checked)} className="prijavise__checkbox" type="checkbox" name="CE" id="CE" /></div>
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="D">D</label><input onChange={(e) => PostaviKategorijeKandidatPosjeduje('D', e.target.checked)} className="prijavise__checkbox" type="checkbox" name="D" id="D" /></div>
                            <div className="prijavise__kategorija__wrapper"><label className="prijavise__kategorija" htmlFor="DE">DE</label><input onChange={(e) => PostaviKategorijeKandidatPosjeduje('DE', e.target.checked)} className="prijavise__checkbox" type="checkbox" name="DE" id="DE" /></div>
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
