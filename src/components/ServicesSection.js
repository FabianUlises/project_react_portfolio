import React from "react";
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import { Desc, About, Hide, Image } from "../styles";
import styled from "styled-components";

const ServicesSection = () => {
    return(
        <Services>
            <Desc>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="card__icon">
                            <img src={clock} alt='clock icon'/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card> 
                        <div className="card__icon">
                            <img src={money} alt='teamwork'/>
                            <h3>TeamWork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="card__icon">
                            <img src={diaphragm} alt='diaphragm'/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="card__icon">
                            <img src={money} alt='money'/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Desc>
            <Image>
                <img src={home2} alt='pic of a home' />
            </Image>
        </Services>
    )
}
const Services = styled(About)`
    h2 {
        padding: 2rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`
export default ServicesSection;