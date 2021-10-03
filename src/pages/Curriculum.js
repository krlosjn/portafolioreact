import React from 'react';
import ImageMe from '../assets/img/ImageMe';
//import '../cv.css';

class Curriculum extends React.Component{
    render(){
        return(
            <div>
                <div className="section container">
                    <h1 ClassName="titulo">Carlos Alfonso Junco Cárdenas</h1>
                    <div className="container">

                        <img src={ImageMe[12]} alt="foto de perfíl" className="img-fluid imagen" id="foto"/>
                    </div>
                
                    <ul className="list-group titulo" >
                        <li className="list-group-item"><a href="#quiensoy" title="Ir a Presentación"  >Quién soy</a></li>
                        <li className="list-group-item"><a href="#quiensoy" title="Ir a Presentación"  >Formación</a></li>
                        <li className="list-group-item"><a href="#experiencia" title="Ir a Experiencia">Experiencia</a></li>
                        <li className="list-group-item"><a href="#portafolio" title="Ir a Portafolio">Contacto</a></li>
                    </ul>
                </div>


                <div id="quiensoy" className="section container">
                    <h2>Quién soy</h2>
                        <h3>Full stack developer</h3>

                        <ul className="lista_datos_presentacion">
                            <li className="datos_presentacion"><strong>Email:</strong> carfju@gmail.com</li>
                            <li className="datos_presentacion"><strong>Edad:</strong> 26 años</li>
                            <li className="datos_presentacion"><strong>Dirección:</strong> Medellín, Colombia</li>
                            <li className="datos_presentacion"><strong>Telefono:</strong> +57 3004534347</li>
                        </ul>		
                                
                        <p>soy una persona con muchas ganas de adquirir conocimientos para
                            desarrollar habilidades que me ayuden a crecer en el mundo tecnológico, me
                            gusta compartir conocimiento y ayudar a las personas, valoro mucho el
                            trabajo en equipo y la importancia para resolver problemas.</p>
                </div>	


                <div id="formacion" className="section container">
                    <h2>Formación</h2>
                    <h3>Bachiller</h3>
                    <p>Coorporación educativa Antonio Ricaurte</p>
                    <p>2010 El carmen de bolívar</p>

                    <h3>Técnica en programación de software</h3>
                    <p>SENA</p>
                    <p>Duración 15 meses</p>
                    <p>Graduado en 2020</p>
                </div>


                <div id="experiencia" className="section container">
                    <h2>Experiencia</h2>
                    <p>LLevo 8 meses como analista desarrollador en matrixTech</p>
                </div>

                <div id="portafolio" className="section container">
                    <h2>Contacto</h2>
                    <ul>
                        <li className="item"><p>Télefono: 30043534347</p></li>
                        <li className="item">
                            <a href="https://github.com/krlosjn/" target="_blank" className="icon-github"><i className="bi bi-github"></i> GitHub</a>
                        </li>
                        <li className="item">
                            
                            <a href="https://www.linkedin.com/in/carlos-alfonso-junco-c%C3%A1rdenas-b00113145/" target="_blank" className="icon-linkedin"><i className="bi bi-linkedin"></i> linkedin</a>
                        </li>
                        <li className="item">
                            
                            <a href="https://wa.me/573004534347" target="_blank" className="icon-whatsapp"><i className="bi bi-whatsapp"></i> whatsapp</a>
                        </li>
                    </ul>	
                </div>
            </div>
        );
    }
}


export default Curriculum;