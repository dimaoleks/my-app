import React from "react";
import preloader from "../../../assets/images/three-dots.svg";

let Preloader = (props) => {
    return <div /*style={{backgroundColor: "gray"}}*/>
        <img src={preloader}/>
    </div>
}

export default Preloader;