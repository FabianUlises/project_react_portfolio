import React from "react";
import home1 from '../img/home1.png';
import styled from "styled-components";


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

const About = styled.div`
 min-height: 90vh;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 5rem 10rem;
 color: white;
 background-color: rebeccapurple;
`;
const Desc = styled.div`
    flex: 1;
    padding-right: 5rem;
    font-weight: lighter;
`
const Image = styled.div`
    flex: 1;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`
const Hide = styled.div`
    overflow: hidden;
`
export default AboutSection;