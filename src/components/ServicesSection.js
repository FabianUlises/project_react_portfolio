import React from "react";
// import clock from '../img/clock.svg';
// import diaphragm from '../img/diaphragm.svg';
// import money from '../img/money.svg';
// import teamwork from '../img/teamwork.svg';
// import home2 from '../img/home2.svg';
const ServicesSection = () => {
    return(
        <div className="services">
            <div className="desc">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="card__icon">
                            {/* <img src={clock} alt='clock icon'/> */}
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card"> 
                        <div className="card__icon">
                            {/* <img src={money} alt='teamwork'/> */}
                            <h3>TeamWork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="card__icon">
                            {/* <img src={diaphragm} alt='diaphragm'/> */}
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="card__icon">
                            {/* <img src={money} alt='money'/> */}
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                {/* <img src={home2} alt='pic of a home' /> */}
            </div>
        </div>
    )
}
export default ServicesSection;