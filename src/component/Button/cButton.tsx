import React from "react";
import "./Button.css";

interface ButtonProps {
    label: string;
    className: string;
}

const Button = (props: ButtonProps) => {
    return(
      <div>
        <button className="light-button">{props.label}</button>
        <span>1</span>
        <button className="light-button">{props.label}</button>
      </div>
    );
}

export default Button;