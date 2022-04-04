import React from "react";

const TextField = ({ label, onChange, value, inputProps }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={{ marginBottom: "1em", color: "grey" }}>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        value={value}
        style={{
          background: "#f0f0f0",
          width: "50%",
          border: "none",
          padding: "0.5em 2em",
        }}
      />
    </div>
  );
};

export default TextField;
