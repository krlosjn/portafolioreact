import React from "react";
import ImageMe from "../assets/img/ImageMe";

class Skills extends React.Component{

    render(){
        return(
            <div className="skills">
                    <div className="container-fluid">
                    <div className="skills-container content">
                        <div className="skill">
                            <div className="skill-container"> 
                                <h2><span className="texto">Habilidades</span></h2>        
                                <p className="skills-texto">Tengo habilidades en desarrollo  tanto front end como back end, manejo de base datos, conocimientos en Java, patrón de diseño MVT,
                                    metodología ágil, conocimientos Python, django, PL/SQL, entre otras. 
                                </p>
                            </div>
                        </div>
                        <div className="technology-container content">
                            <div className="tech-container">
                                <li>
                                    <img className="love-images" src={ImageMe[4]}/>
                                    <p>Javascript</p>
                                </li>
                                <li>
                                    <img className="love-images" src={ImageMe[5]}/>
                                    <p>CSS</p>
                                </li>
                                <li>
                                    <img className="love-images" src={ImageMe[7]}/>
                                    <p>Bootstrap</p>
                                </li>
                                <li>
                                    <img className="love-images" src={ImageMe[8]}/>
                                    <p>Java</p>
                                </li>
                                <li>
                                    <img className="love-images" src={ImageMe[9]}/>
                                    <p>PL/SQL</p>
                                </li>
                                <li>
                                    <img className="love-images" src={ImageMe[10]}/>
                                    <p>HTML5</p>
                                </li>
                                <li>
                                    <img className="love-images" src={ImageMe[11]}/>
                                    <p>React</p>
                                </li>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;