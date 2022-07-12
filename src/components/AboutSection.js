import React from "react";
import home1 from '../img/home1.png';
// import styled from "styled-components";
import { Desc, About, Hide, Image } from "../styles";


const AboutSection = () => {
    return(
        <About>
            <Desc>
                <div className="desc__title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia exercitationem temporibus, facere ab velit.</p>
                <button>Contact Us</button>
            </Desc>
            <Image>
                <img src={home1} alt="guy with camera" />
            </Image>
        </About>
    )
}

export default AboutSection;