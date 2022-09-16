import React, { useState } from "react";

export default function ({ styles, setStyles }) {
  const [property, setProperty] = useState("");
  const [value, setValue] = useState("");
  const [isApplied, toggleApplied] = useState(false);
  const applyStyle = () => {
    setStyles((prevStyles) => {
      return { ...prevStyles, [property]: value };
    });
  };

  return (
    <>
      <div className="style-input">
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
      </div>
      {Object.keys(styles).map((e) => (
        <div className="style-input">
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
          <button className="btn">❌</button>
          <button className="btn" onClick={applyStyle}>
            ✅
          </button>
          )}
        </div>
      ))}
    </>
  );
}
