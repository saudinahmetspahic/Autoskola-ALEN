import React from 'react'
import './Autoskola.css'

import PrijaviSe from '../PrijaviSe/PrijaviSe'

import { RiArrowDownSFill } from 'react-icons/ri'

import auto_1 from '../../images/auto_1.jpg'
import auto_2 from '../../images/auto_2.jpg'

import header_image from '../../images/prijavise.png'

function Autoskola() {
    return (
        <div className="autoskola">
            <div className="autoskola__header">
                <img src={header_image} alt="" className="autoskola__header__img" />
                <p className="autoskola__header__description">
                    PRIJAVI SE
                </p>
                <RiArrowDownSFill className="autoskola__header__arrow" />
            </div>
            <div className="autoskola__content">
                <div className="autoskola__content__description">
                    <h4 className="autoskola__content__description_h4">AUTOŠKOLA ALEN</h4>
                    <p className="autoskola__content__description__p">Autoškola ALEN osposobljava polaznike nastave za sigurnu i kvalitetnu voznju. Cilj je kandidata obućiti na najbolji način, koji mu omogućava da nakon polaganja učestvuje u saobračaju i bude uzoran vozač.</p>
                    <p className="autoskola__content__description__p">Naš cilj je biti najbolji u onome što radimo. Da bi bili najbolji, potrebno je ispuniti očekivanja naših polaznika. Osmijeh i zadovoljstvo naših polaznika nakon položenog ispita je naša najveća nagrada.</p>
                    <p className="autoskola__content__description__p">Ukoliko se i ti želiš prijaviti ispuni formu i očekuj naš poziv.</p>
                </div>
                <div className="autoskola__content__images">
                    <img src={auto_1} alt="" className="autoskola__content__img" />
                    <img src={auto_2} alt="" className="autoskola__content__img" />
                </div>
            </div>
            {/* <div className="autoskola__row">
                <div className="autoskola__col">
                    <img src={auto_1} className="autoskola__image" alt="" />
                </div>
                <div className="autoskola__col autoskola__col--padding">
                    <p className="autoskola__header__small">AUTOŠKOLA  -  O NAMA</p>
                    <p className="autoskola__header">ALEN</p>
                    <p className="autoskola__description">Autoškola ALEN osposobljava polaznike nastave za sigurnu i kvalitetnu voznju. Cilj je kandidata obućiti na najbolji način, koji mu omogućava da nakon polaganja učestvuje u saobračaju i bude uzoran vozač.</p>
                </div>
            </div>
            <div className="autoskola__row">
                <div className="autoskola__col autoskola__col--padding">
                    <p className="autoskola__header__small">AUTOŠKOLA  -  VIZIJA</p>
                    <p className="autoskola__header">Biti najbolji</p>
                    <p className="autoskola__description">Naš cilj je biti najbolji u onome što radimo. Da bi bili najbolji, potrebno je ispuniti očekivanja naših polaznika. Osmijeh i zadovoljstvo naših polaznika nakon položenog ispita je naša najveća nagrada. </p>
                </div>
                <div className="autoskola__col">
                    <img src={auto_2} className="autoskola__image" alt="" />
                </div>
            </div> */}
            <div className="autoskola__row">
                <PrijaviSe id="prijavise" />
            </div>
        </div>
    )
}

export default Autoskola
