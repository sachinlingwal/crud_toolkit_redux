import React from "react";

const Button = ({ onclick, children }) => {
  return (
    <button
      style={{
        padding: "0.5em 2em",
        color: "white",
        border: "none",
        margin: "0.1em 1em",
        background: "blue",
      }}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;
