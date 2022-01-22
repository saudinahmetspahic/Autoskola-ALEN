import React, { useState, useEffect } from 'react'
import './Testovi.css'

import file_1 from "../../files/katalog pitanja oblast II.pdf"
import file_2 from "../../files/katalog pitanja oblast III Prepravljeno.pdf"
import file_3 from "../../files/novi_katalog_sa_odgovorima(2).pdf"

function Testovi() {
    const [doc, setDoc] = useState(file_2)

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    return (
        <div className="testovi">
            <iframe title="testovi" className="testovi__frame" src="https://spesdriver.com/ba/test/embed"></iframe>
            <div className="testovi_pdf_files">
                <p className="testovi_pdf_files_description">Teorijska pitanja za polaganje vozačkog ispita.</p>
                <div className="testvi_pdf_files__bts">
                    <button onClick={() => setDoc(file_1)} className="btn-tab">Teorija - Oblast I</button>
                    <button onClick={() => setDoc(file_2)} className="btn-tab">Teorija - Oblast II</button>
                    <button onClick={() => setDoc(file_3)} className="btn-tab">Teorija - Oblast III</button>
                </div>
                {isMobile ||
                    <iframe className="testovi_pdf_files_iframe" src={doc} frameborder="0"></iframe>
                }
                {isMobile &&
                    <p>download</p>
                    // <iframe className="testovi_pdf_files_iframe" src={doc} frameborder="0"></iframe> 
                }


            </div>
        </div>
    )
}

export default Testovi
