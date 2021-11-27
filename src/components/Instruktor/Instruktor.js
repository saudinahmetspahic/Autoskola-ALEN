import React from 'react'
import './Instruktor.css'
import { AiFillPhone } from 'react-icons/ai'
import { AiFillMail } from 'react-icons/ai'

import alen_img from '../../images/instruktor_1.jpg'

function Instruktor() {
    return (
        <div className="instruktor">
            <div className="instruktor__col">
                <img src={alen_img} className="instruktor__col__image" alt="" />
            </div>
            <div className="instruktor__col">
                <p className="instruktor__header__small">Instruktor</p>
                <p className="instruktor__header">Alen Ahmetspahić</p>
                <p className="instruktor__description">Stručnost i profesionalnost istruktora autoškole ALEN će Vam omogućiti savladavanje vozačke vještine za bezbijedno učestvovanje u saobraćaju. Obuka se vrši na idividualan način usmjeren prema kandidatu i njegovim potrebama i mogućnostima.</p>
                <div className="instruktor__info">
                    <p className="instruktor__info__p"><AiFillPhone className="instruktor__icon" /> +387 (0)61 433 378</p>
                    <p className="instruktor__info__p"><AiFillMail className="instruktor__icon" /> alen@autoskola.ba</p>
                </div>
            </div>
        </div>
    )
}

export default Instruktor
