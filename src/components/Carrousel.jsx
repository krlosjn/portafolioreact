import {React,useState} from  'react';
import {Carousel,Item,Caption} from 'react-bootstrap';
import Presentation from './Presentation';
import ImageMe from '../assets/img/ImageMe';

const Carrousel =()=>{
 
        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };

        return(
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ImageMe[13]}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Proyecto html</h3>
                        <p>html + JS + CSS</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ImageMe[14]}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Proyecto React</h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ImageMe[15]}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Proyecto html</h3>
                        <p>
                            html + JS + CSS
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    
    }

export default Carrousel;