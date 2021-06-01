import React from 'react';

function About(props) {
    return (
        <div className="col-10 about offset-2">
            {/*    **********ABOUT US*******/}
            <div className="row">

                <div className="lineWhite">
                    <div className="iconAbout text-center d-flex"><img className="mr-4" src="/icons/inbox.svg" alt=""/>
                        <p
                            className="m-auto">About Us</p></div>
                </div>

                <h1 className="text-white text-center">
                    We're a highly skilled and motivated team of creative people who <br/> have been designing,
                    developing,
                    maintaining and hosting <br/> websites and web applications for the businesses of Essex,
                    London <br/> and beyond
                    for
                    more than 21 years.
                </h1>
                <div className="col-6 mt-5 text-white text-center">
                    Beginning life as a start-up business providing web <br/> design in Essex, a passion for design and the
                    internet <br/> has helped develop Enovate into a successful agency <br/> based on the strength of our work and
                    the professional <br/> way we engage with our clients.
                </div>
                <div className="col-6 mt-5 text-white text-center">
                    We're proud of the reputation we've built and the <br/> relationships we've developed with our customers,
                    some <br/> of which have been with us for over five years or more, <br/> and they see us as an integral part of
                    how their business <br/> is represented both online and offline.
                </div>
                <div className="brandImages  m-auto d-flex justify-content-between">
                    <img src="/images/20200908171549-5386.jpg" alt=""/>
                    <img src="/images/download.png" alt=""/>
                    <img src="/images/Logo-new.jpg" alt=""/>
                </div>
            </div>
        </div>

    );
}

export default About;