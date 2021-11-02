import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub,faInstagram} from '@fortawesome/free-brands-svg-icons'

const Bye=()=>{
    return(
        <div>
            <footer className="footer">
                <div className="container">
                <div className="footer-list content">
                <h3>Thanks!</h3>
                <li>
                <a href="#about"><p className="texto">Acerca de mí</p></a>
                </li>
                <li>
                <a href="#projects"><p className="texto">Proyectos</p></a>
                </li>
                <li>
                <a href="#contact"><p className="texto">Contacto</p></a>
                </li>
                <div className="networks">
                <a href="https://github.com/krlosjn/" target="_blank" className="icon-github"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/carlos-alfonso-junco-c%C3%A1rdenas-b00113145" target="_blank" className="icon-linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://www.instagram.com/krlosjp/" target="_blank" className="icon-instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
                </div>
                </div>
            </footer>
        </div>
    );
}

export default Bye;