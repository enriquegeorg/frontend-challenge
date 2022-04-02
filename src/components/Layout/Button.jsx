/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import "./Button.css";

export default (props) => {
  const buttonProps = {
    class: props.class || "",
    color: props.color || "",
    width: props.width || "100%",
    height: props.height || "100%",
    border: props.border || "1px solid #424242",
    icon: props.icon || null,
    backgroundColor: props.backgroundColor || "",
    borderColor: props.borderColor || "",
    text: props.text || "",
  };
  console.log(props);
  return (
    <button
      className={buttonProps.class ? `btn btn-${buttonProps.class}` : `btn`}
      onClick={props.onClick}
      style={{
        height: buttonProps.height,
        width: buttonProps.width,
        border: buttonProps.border,
        borderColor: buttonProps.borderColor,
        backgroundColor: buttonProps.backgroundColor,
        color: buttonProps.color,
      }}
    >
      {buttonProps.icon}

      {buttonProps.text}
    </button>
  );
};
