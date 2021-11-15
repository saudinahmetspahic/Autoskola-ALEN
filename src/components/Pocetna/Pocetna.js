import React from 'react'
import './Pocetna.css'
import { Link } from 'react-router-dom'
import { AiFillPhone } from 'react-icons/ai'
import { AiTwotoneMail } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'
import { ImFacebook } from 'react-icons/im'
import { ImInstagram } from 'react-icons/im'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

import ContactSection from '../ContactSection/ContactSection'

import main from '../../images/main.jpeg'
import pc from '../../images/pc.png'
import hands from '../../images/hands.png'
import licence from '../../images/licence.png'

import about_us_1 from '../../images/about_us_1.jpg'
import about_us_2 from '../../images/about_us_2.jpg'

import road_bg from '../../images/road_bg.png'

function Pocetna() {

    const alen_fb = "https://www.facebook.com/Autoskola-ALEN-106837360920628";
    const alen_ig = "https://www.instagram.com/autoskolaalen/";

    return (
        <div className="pocetna">
            <section className="pocetna__section">
                <img className="pocetna__section__img" src={main} alt="" />
                <div className="pocetna__section__content pocetna__section__content--dark--bg">
                    <p className="pocetna__section__content__p">Kvalitetna obuka za B kategoriju</p>
                    <p className="pocetna__section__content__p">ALEN AUTOŠKOLA</p>
                    <p className="pocetna__section__content__p">Prijavite se na brz i jednostavan način</p>
                    <button className="btn pocetna__section__content__btn">Prijavi se</button>
                </div>
            </section>
            <section className="pocetna__section">
                <div className="pocetna__section__content pocetna__section__content--dark--bg">
                    <div className="pocetna__section__content__row">
                        <div className="pocetna__section__content__col">
                            <img className="pocetna__section__content__col__img" src={pc} alt="" />
                            <h4 className="pocetna__section__content__col__header">Ući teoriju i testiraj se</h4>
                            <p className="pocetna__section__content__col__description">Ova stranica ti omogućava da testiras svoje znanje iz teorije i da se pripremis za polaganje teorijskog dijela ispita.</p>
                        </div>
                        <div className="pocetna__section__content__col">
                            <img className="pocetna__section__content__col__img" src={hands} alt="" />
                            <h4 className="pocetna__section__content__col__header">Sigurna i kvalitetna obuka vožnje</h4>
                            <p className="pocetna__section__content__col__description">Mi obućavamo kandidate i spremamo ih za polaganje praktičnog dijela ispita (vožnje).</p>
                        </div>
                        <div className="pocetna__section__content__col">
                            <img className="pocetna__section__content__col__img" src={licence} alt="" />
                            <h4 className="pocetna__section__content__col__header">Tvoja prva vozačka dozvola</h4>
                            <p className="pocetna__section__content__col__description">Cilj je obućiti kandidata da bude dovoljno kvalitetan vozač u saobraćaju. Nakon polaganja dobijaš svoju vozačku dozvolu.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pocetna__section">
                <div className="pocetna__section__content about__us">
                    <div className="pocetna__section__content__row">
                        <div className="pocetna__section__content__col">
                            <img src={about_us_1} alt="" className="about__us__image__1" />
                            <img src={about_us_2} alt="" className="about__us__image__2" />
                            {/* <img className="about__us__image" src={about_us} alt="" />
                            <img className="about__us__d__image" src={about_us_d} alt="" />
                            <img className="about__us__d__image" src={about_us_d} alt="" />
                            <img className="about__us__d__image" src={about_us_d} alt="" /> */}
                        </div>
                        <div className="pocetna__section__content__col pocetna__section__content__col--left">
                            <p className="about__us__header__1">Kreni na putovanje sa nama</p>
                            <p className="about__us__header__2">Nudimo ti kvalitetnu i sigurnu obuku za B kategoriju</p>
                            <p className="about__us__description">Osposobljavanje temeljimo na tome da polaznici dobiju maksimalno znanje o prometu te ih učimo da predviđaju opasnost, da ne predcjenuju svoje sposobnosti, da ne upravljaju na granici rizika, da predviđaju tuđe pogreške,da budu tolerantni prema drugim sudionicima u prometu i dr.</p>
                            <Link to="/autoskola" className="btn">Više informacija</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pocetna__section">
                <img src={road_bg} className="road__bg__image" alt="" />
                <div className="pocetna__section__content pocetna__section__content--dark--bg">
                    <p className="road__bg__header">Provjeri svoje znanje</p>
                    <p className="road__bg__description">Provjeri svoje znanje kroz razne testove koji simuliraju polaganje teorijskog dijela ispita. Osim za B, testovi su dostupni i za ostale kategorije. Na kraju svakog testa se prikazuje rezultat u procentima.</p>
                    <Link to="/testovi" className="btn road__bg__btn">Provjeri znanje</Link>
                </div>
            </section>
            <section className="pocetna__section">
                <div className="pocetna__section__content contact__bg">
                    <div className="pocetna__section__content__row">
                        <div className="pocetna__section__content__col">
                            <ContactSection title="Društvene mreže">
                                <p>Pratite nas na našim društvenim mrežama.</p>
                                <div className="soc__networks">
                                    <a href={alen_fb} target="_blank" rel="noreferrer"><ImFacebook className="soc__icon" /></a>
                                    <a href={alen_ig} target="_blank" rel="noreferrer"><ImInstagram className="soc__icon" /></a>
                                </div>
                            </ContactSection>
                        </div>
                        <div className="pocetna__section__content__col">
                            <ContactSection title="Kontakt informacije">
                                <p className="align__info"><AiFillPhone /> +387 (0)61 433 378</p>
                                <p className="align__info"><AiTwotoneMail /> alen@autoskola.ba</p>
                            </ContactSection>
                        </div>
                        <div className="pocetna__section__content__col">
                            <ContactSection title="Lokacija">
                                <p className="align__info"><ImLocation />Zenica (BiH)</p>
                                <p className="align__info"><ImLocation />Vranduk (BiH)</p>
                            </ContactSection>
                        </div>
                        <div className="pocetna__section__content__col">
                            <ContactSection title="Pomoć">
                                Ukoliko vam je potrebna pomoć obratite nam se preko društvenih mreža, e-maila ili telefonskim pozivom prikazanim pod kontakt informacijama.
                            </ContactSection>
                        </div>
                    </div>
                    <div className="pocetna__section__content__row cr__bg">
                        <div className="pocetna__section__content__col">
                            <p className="align__info"><AiOutlineCopyrightCircle className="cr__image" /> 2021. Autoškola ALEN - Alen Ahmetspahić</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Pocetna
