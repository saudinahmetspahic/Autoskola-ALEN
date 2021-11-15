import React from 'react'
import './ContactSection.css'

function ContactSection({ title, children }) {
    return (
        <div className="contact">
            {title && <p className="contact__title">{title}</p>}
            <div className="contact__content">{children}</div>
        </div>
    )
}

export default ContactSection
