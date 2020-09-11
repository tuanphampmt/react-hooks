import React, { useState } from "react";
import PropTypes from "prop-types";

ColorBox.propTypes = {};

function ColorBox(props) {
    const [color, setColor] = useState("red");

	return <div className="color-box" style={{backgroundColor: color}}>


    </div>;
}

export default ColorBox;
