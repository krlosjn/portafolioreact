import React from 'react';
//import { FaWhatsappSquare } from "react-icons/fa";

class Contact extends React.Component{
    render(){
        return(
            <div className="contact" id="contact">
                <div className="container">
                    <div className="social-net content">
                        <div className="social-contact">
                            <h2 className="texto">CONTÁCTAME</h2>
                            <p className="texto">Es genial verte por aquí! construyamos un futuro juntos</p>
                            <span className="texto">carfjun@gmail.com</span><br/>
                            <strong>(+57) 3004534347</strong>
                        </div>
                        <div className="networks-fixed">
                            <a href="https://github.com/krlosjn/" target="_blank" className="icon-github"></a>
                            <a href="https://www.linkedin.com/in/carlos-alfonso-junco-c%C3%A1rdenas-b00113145" target="_blank" className="icon-linkedin"><i className="bi bi-linkedin"></i></a>
                            <a href="https://www.instagram.com/krlosjp/" target="_blank" className="icon-instagram"><i className="bi bi-instagram"></i></a>
                            <a href="https://wa.me/573004534347" target="_blank" className="icon-whatsapp"><i className="bi bi-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;