import React from 'react'
import './Autoskola.css'

import PrijaviSe from '../PrijaviSe/PrijaviSe'

import auto_1 from '../../images/auto_1.jpg'
import auto_2 from '../../images/auto_2.jpg'

function Autoskola() {
    return (
        <div className="autoskola">
            <div className="autoskola__row">
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
            </div>
            {/* <div className="autoskola__row">
                <div className="autoskola__col autoskola__col--padding">
                    <p className="autoskola__header__small">AUTOŠKOLA  -  VOZILO</p>
                    <p className="autoskola__header">AUDI A3</p>
                    <p className="autoskola__description">Obuku polaznika vrši instruktor Alen Ahmetspahić, na vozilu marke Audi A3. Autoškola vrši obuku za kateogriju B.</p>
                </div>
                <div className="autoskola__col">
                    <img src={auto_2} className="autoskola__image" alt="" />
                </div>
            </div> */}
            <div className="autoskola__row">
                <PrijaviSe />
            </div>
        </div>
    )
}

export default Autoskola
