import React, { useState } from "react";
export function StyleInput({ prop, val, setStyles }) {
  const [property, setProperty] = useState(prop ?? "");
  const [value, setValue] = useState(val ?? "");
  const applyStyle = () => {
    if (property && value)
      setStyles((prevStyles) => {
        return { ...prevStyles, [property]: value };
      });
    setProperty("");
    setValue("");
  };

  return (
    <>
      <input
        name={"property"}
        className={`input-field`}
        type={"text"}
        placeholder={"Enter property"}
        value={property}
        onChange={(e) => setProperty(e.target.value)}
      />
      <input
        name={"value"}
        className={`input-field`}
        type={"text"}
        placeholder={"Enter value"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn" onClick={applyStyle}>
        ✅
      </button>
    </>
  );
}
