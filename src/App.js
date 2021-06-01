import "./sass/main.scss";
import NavigationBar from "./components/NavigationBar";
import BackCircle from "./components/BackCircle";
import About from "./components/About";
import Team from "./components/Team";
import Whatwedo from "./components/Whatwedo";
import Specialisms from "./components/Specialisms";
import ImageSlider from './components/ImageSlider';
import {SliderData} from './components/SliderData';
import Get from "./components/Get";
import React, {useState, useEffect} from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
    const
        [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return (
        <div className="container-fluid">
            {
                loading ?
                    <div className=" loader"><PacmanLoader color={"#5dd600"} loading={loading} size={50}/></div>
                    :
                    <div className="row">
                        <NavigationBar/>
                        <BackCircle/>
                        <About/>
                        <Team/>
                        <Whatwedo/>
                        <Specialisms/>
                        <ImageSlider slides={SliderData}/>
                        <Get/>
                    </div>
            }
        </div>

    );
}

export default App;
