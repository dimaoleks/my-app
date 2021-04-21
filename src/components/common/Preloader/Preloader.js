import React from "react";
import preloader from "../../../assets/images/three-dots.svg";

let Preloader = (props) => {
    return <div /*style={{backgroundColor: "gray"}}*/>
        <img src={preloader} alt=''/>
    </div>
}

export default Preloader;