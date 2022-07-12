import React from "react";

const AboutSection = () => {
    return(
        <div>
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
                <img src={home1} alt="guy with camera" />
            </div>
        </div>
    )
}