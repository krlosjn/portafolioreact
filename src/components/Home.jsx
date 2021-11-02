import React from 'react';
import Menu from './Menu';
import Presentation from './Presentation';
import AboutMe from './AboutMe';
import Hobbies from './Hobbies';
import Skills from './Skills';
import Contact from './Contact';
import Bye from './Bye';
import Carrousel from './Carrousel';


const Home=()=>{
    return(
        <div>
            <header>
            <Menu/>
            </header>
            <body>
                <section id='presentacion'>
                <Presentation/>
                </section>
                <section id='acercaMi'>
                <AboutMe/>
                </section>
                <section>
                <Hobbies/>
                </section>
                <section>
                <Skills/>
                </section>
                <section>
                <Carrousel/>
                </section>
                <section id='contacto'>
                <Contact/>
                </section>
                <footer>
                    <Bye/>
                </footer>
            </body>
        </div>
    );
}

export default Home;