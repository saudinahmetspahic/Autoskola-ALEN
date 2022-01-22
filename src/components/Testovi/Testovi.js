import React, { useState, useEffect } from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import './Testovi.css'

import file_1 from "../../files/katalog pitanja oblast II.pdf"
import file_2 from "../../files/katalog pitanja oblast III Prepravljeno.pdf"
import file_3 from "../../files/novi_katalog_sa_odgovorima(2).pdf"

var fileTitles = [
    { Title: "Oblast I" },
    { Title: "Oblast II" },
    { Title: "Oblast III" }
];

function Testovi() {
    const [doc, setDoc] = useState(file_1)
    const [docTitles, setDocTitles] = useState(fileTitles[0].Title)

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

    const setDocument = (idx) => {
        switch (idx) {
            case 1: {
                setDoc(file_1);
                setDocTitles(fileTitles[0].Title);
                break;
            }
            case 2: {
                setDoc(file_2);
                setDocTitles(fileTitles[1].Title);
                break;
            }
            case 3: {
                setDoc(file_3);
                setDocTitles(fileTitles[2].Title);
                break;
            }
            default: {
                setDoc(file_1);
                setDocTitles(fileTitles[0].Title);
            }
        }

    }

    const isMobile = width <= 768;
    return (
        <div className="testovi">
            <iframe title="testovi" className="testovi__frame" src="https://spesdriver.com/ba/test/embed"></iframe>
            <div className="testovi_pdf_files">
                <p className="testovi_pdf_files_description">Teorijska pitanja za polaganje vozačkog ispita.</p>
                {isMobile &&
                    <p className='testovi_pdf_files_select'>Odaberite file</p>
                }
                <div className="testvi_pdf_files__bts">
                    <button onClick={() => setDocument(1)} className="btn-tab">Teorija - Oblast I</button>
                    <button onClick={() => setDocument(2)} className="btn-tab">Teorija - Oblast II</button>
                    <button onClick={() => setDocument(3)} className="btn-tab">Teorija - Oblast III</button>
                </div>
                {isMobile ||
                    <iframe title='teorija' className="testovi_pdf_files_iframe" src={doc} frameborder="0"></iframe>
                }
                {isMobile &&
                    <a className="testvi_pdf_files_download_btn" href={doc} download="Teorija.pdf" ><AiOutlineDownload /> Preuzmi - {docTitles}</a>
                }


            </div>
        </div>
    )
}

export default Testovi
