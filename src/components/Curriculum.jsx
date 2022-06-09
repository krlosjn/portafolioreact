import React from 'react';
import ImageMe from '../assets/img/ImageMe';
import '../cv.css';

const Curriculum=()=>{   
    return(
        <div>
            <div className="section container">
                <h1 className="titulo textoH1">Carlos Alfonso Junco Cárdenas</h1>
                <div className="container">

                    <img src={ImageMe[12]} alt="foto de perfíl" className="img-fluid imagenCv"/>
                </div>
            
                <ul className="list-group titulo lista listando" >
                    <li className="list-group-item"><a href="#quiensoy" title="Ir a Presentación"  >Quién soy</a></li>
                    <li className="list-group-item"><a href="#quiensoy" title="Ir a Presentación"  >Formación</a></li>
                    <li className="list-group-item"><a href="#experiencia" title="Ir a Experiencia">Experiencia</a></li>
                    <li className="list-group-item"><a href="#portafolio" title="Ir a Portafolio">Contacto</a></li>
                </ul>
            </div>


            <div id="quiensoy" className="section container">
                <h2 className="textoH2">Quién soy</h2>
                    <h3 className="textoH3">Full stack developer</h3>

                    <ul className="lista_datos_presentacion listando">
                        <li className="datos_presentacion"><strong>Cédula:</strong>1152205388</li>
                        <li className="datos_presentacion"><strong>Email:</strong> carfjun@gmail.com</li>
                        <li className="datos_presentacion"><strong>Edad:</strong>27 años</li>
                        <li className="datos_presentacion"><strong>Ciudad:</strong> Medellín, Colombia</li>
                        <li className="datos_presentacion"><strong>Telefono:</strong> +57 3004534347</li>
                    </ul>		
                            
                    <p className="parrafos">soy una persona  a la que le apasiona el mundo tecnológico, me
                        gusta compartir conocimiento y ayudar a las personas, valoro mucho el
                        trabajo en equipo y la importancia para resolver problemas.Siempre con ganas de aprender y mejorar mis habilidades técnicas y humanas.
                    </p>
            </div>	


            <div id="formacion" className="section container">
                <h2 className="textoH2">Formación</h2>
                <h3 className="textoH3">Bachiller</h3>
                <p className="parrafos">Coorporación educativa Antonio Ricaurte</p>
                <p>2010 El carmen de bolívar</p>

                <h3 className="textoH3">Técnica en programación de software</h3>
                <p className="parrafos">SENA</p>
                <p className="parrafos">Duración 15 meses</p>
                <p className="parrafos">Graduado en 2020</p>

                <h3 className="textoH3">Misión tic 2021</h3>
                <p className="parrafos">universidad de antioquia</p>
                <p className="parrafos">Duración 7 meses</p>
                
                {/* <h3 className="textoH3">Ingeniería de materiales - cursando</h3>
                <p className="parrafos">Universidad de antioquia</p> */}
            </div>


            <div id="experiencia" className="section container">
            <h2 className="textoH2">Experiencia</h2>
            <p className="parrafos">15 meses como analista desarrollador  en matrixTech octubre 2020-enero
            </p>  
            <ul>
                <li>Solución de incidentes</li>
                <li>Consumo de microservicios rest y soap</li>
                <li>implementación de componentes con arquitectura javaEE, jsp, servlets,jdbc</li>
                <li>implementación de procedimientos almacenados con pl/sql</li>
            </ul>
            <p className="parrafos">6 meses desarrollador java - Ceiba Software enero-presente</p>
            <ul>
                <li>Análisis de requerimientos de negocio</li>
                <li>construcción de soluciones de acuerdo al requerimiento</li>
                <li>auto aprendizaje de herramientas según la necesidad del proyecto</li>
            </ul>
            {/* 
            <p className="parrafos">
                (Acodal - noroccidente 1 enero 2016- 31 diciembre 2016)
                Apoyo a convocatoria para eventos ambientales a través de medios virtuales,
                emails masivos,redes sociales, invitación directa.
                -Organización logística de capacitación
                -Acompañamiento en el desarrollo de la capacitación</p> */}

            </div>


            <div id="habilidades" class="section container">
                <h2 className="textoH2">Habilidades y Competencias</h2> 
                <ul className="listando">
                    <li>Conocimiento en programación orientado a objetos</li>
                    <li>Análisis y Resolución de problemas</li>
                    <li>Conocimientos de algoritmia</li>
                    <li>Testing java</li>
                    <li>conocimientos de principios solid</li>
                    <li>Conocimientos básicos-medios en React, node.js y mongoDB</li>
                    <li>JavaScript,typescript</li>
                    <li>Sistema de versionamiento git</li>
                    <li>Gestores de dependencias maven y gradle</li>
                    <li>Java</li>
                    <li>SQL</li>
                    <li>PL/SQL</li>
                    <li>springboot</li>
                    <li>angular</li>
                    <li>HTML5</li>
                    <li>CSS</li> 
                </ul>
            </div>


            <div id="portafolio" className="section container">
                <h2 className="textoH2">Contacto</h2>
                <ul className="listando">
                    <li className="item"><p>Télefono: 3004534347</p></li>
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
export default Curriculum;