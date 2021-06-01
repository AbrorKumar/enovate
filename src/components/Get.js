import React from 'react';

function Get(props) {
    return (
        <div className="col-10 offset-2 gettouch">
            <div className="row getRow">
                <div className="col-2 text-center offset-5">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <button className="btn">tell us about your project
                                    <span><img src="/icons/arrow-right-circle.svg" alt=""/></span></button>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">(+44) 01245 64 64 64</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">hello@enovate.co.uk

                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Enovate Design Ltd
                                BIC 215 - Arise Chelmsford, Alan Cherry Drive,
                                Chelmsford, Essex, CM1 1SQ
                                United Kingdom</a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Get;