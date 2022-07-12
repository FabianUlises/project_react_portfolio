import React from "react";
import home1 from '../img/home1.png';
import styled from "styled-components";


const AboutSection = () => {
    return(
        <About>
            <div className="desc">
                <div className="desc__title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia exercitationem temporibus, facere ab velit.</p>
                <button>Contact Us</button>
            </div>
            <div className="image">
                <h3>image</h3>
                <img src={home1} alt="guy with camera" />
            </div>
        </About>
    )
}

const About = styled.div`
 min-height: 90vh;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 5rem 10rem;
 color: white;
 background-color: rebeccapurple;
`;
export default AboutSection;