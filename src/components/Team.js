import React from 'react';

function Team(props) {
    return (
        <div className="col-10 offset-2 team">
            <div className="row teamRow">
                <div className="lineWhite2">
                    <div className="iconAbout2 text-center d-flex"><img className="mr-4" src="/icons/inbox.svg" alt=""/>
                        <p
                            className="m-auto">The Team</p></div>
                </div>
                <div className="col-2 offset-1 teamCol">
                    <div className="picturesCircle text-center"><img src="/images/m(01-32)_gr.jpg" alt=""/>Micheal
                        Jackson
                    </div>
                </div>
                <div className="col-2 teamCol">
                    <div className="picturesCircle text-center"><img src="/images/m(01-32)_gr.jpg" alt=""/>Micheal
                        Jackson
                    </div>
                </div>
                <div className="col-2 teamCol">
                    <div className="picturesCircle text-center"><img src="/images/m(01-32)_gr.jpg" alt=""/>Micheal
                        Jackson
                    </div>
                </div>
                <div className="col-2 teamCol">
                    <div className="picturesCircle text-center"><img src="/images/m(01-32)_gr.jpg" alt=""/>Micheal
                        Jackson
                    </div>
                </div>
                <div className="col-2 teamCol">
                    <div className="picturesCircle text-center"><img src="/images/m(01-32)_gr.jpg" alt=""/>Micheal
                        Jackson
                    </div>
                </div>
                {/***********COL-2 WITH 3 PICTURES************/}
                <div className="col-2 offset-3 teamCol">
                    <div className="picturesCircle text-center"><img src="/images/m(01-32)_gr.jpg" alt=""/>Micheal
                        Jackson
                    </div>
                </div>
                <div className="col-2 teamCol">
                    <div className="picturesCircle text-center"><img src="/images/m(01-32)_gr.jpg" alt=""/>Micheal
                        Jackson
                    </div>
                </div>
                <div className="col-2 teamCol">
                    <div className="picturesCircle text-center"><img src="/images/m(01-32)_gr.jpg" alt=""/>Micheal
                        Jackson
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;