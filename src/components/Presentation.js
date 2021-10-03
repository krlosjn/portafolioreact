import React from 'react';
import '../style.css';
import {Container,Row,Col,Image} from 'react-bootstrap';
import ImageMe from '../assets/img/ImageMe';

class Presentation extends React.Component{

    render(){
        return(
            <div className="background">
                <section className="background-info">
                    <div>
                        <div>
                            <img className="img-profile" src={ImageMe[0]}/>                                         
                        </div>
                        <h2>Carlos Junco</h2>
                        <h5>Software Developer</h5>
                    </div>
                </section>
            </div>
        );
    }
}

export default Presentation;