import React from 'react';
import ImageMe from '../assets/img/ImageMe';

class Hobbies extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid">
                    <div class="content">
                        <h3 className="subtitle" id="textoHobbie">Hobbies</h3>
                        <div className="number-container">
                            <li>
                                <img className="love-images" src={ImageMe[1]}/>
                                <p>Programar</p>
                            </li>
                            <li>
                                <img className="love-images" src={ImageMe[2]}/>
                                <p>Viajar</p>
                            </li>
                            <li>
                                <img className="love-images" src={ImageMe[3]}/>
                                <p>Aprender</p>
                            </li>
                            <li>
                                <img className="love-images" src={ImageMe[6]}/>
                                <p>Astronomía</p>
                            </li>
                            
                            
                        </div>
                    </div>
                </div>
        

            </div>
        );
    }


}

export default Hobbies;