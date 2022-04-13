import React from "react";
import "./Button.css";

interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return <button className={'light-button'}>{props.label}</button>;
}

export default Button;