import React from 'react';

function NavigationBar(props) {
    return (
        <div className="col-2 navIgation">
            {/*     ******navigationBarBurger*****/}
            <a href="">
                <div className="navigationBarBurger"><img src="/icons/menu.svg" alt=""/>Menu</div>
            </a>
            {/****TEXT ENOVATE******/}
            <div className="navbarText">
          <div className="lineEnova"> <h1 className="text-center text-white">enovate</h1></div>
                <p className="text-white pt-3 ">
                    Established in 2000, we're a web design agency driven by a real passion for the web. Based in
                    Chelmsford, Essex (UK) we produce innovative and user-friendly websites and web applications. Please
                    view our portfolio, meet the team or read our client testimonials.
                </p>
                <button className="btn w-100">make an enquiry
                    <span><img  src="/icons/arrow-right-circle.svg" alt=""/></span></button>
                <div className="navigationBarIcon text-center">
                    <a href=""> <img src="/icons/phone.svg" alt=""/>01245 64 64 64</a>
                </div>
                <div className="est text-center">
                    <p>EST. 2000</p>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;