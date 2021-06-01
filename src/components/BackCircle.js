import React from 'react';

function BackCircle(props) {
    return (
        <div className="col-10 col-lg-10 col-md-10 col-sm-10 col-xl-10  backcircle offset-2">
            <div className="text-white text-center circle">
              <h4>  Lorem ipsum dolor <br/> sit amet, consectetur <br/>  adipisicing elit. Dolor, quod!</h4>
                <p className="pt-4">Scroll down
                    <img className="animScrol" src="/icons/chevron-down (1).svg" alt=""/>
                </p>
            </div>
        </div>
    );
}

export default BackCircle;