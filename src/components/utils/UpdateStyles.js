import { StyleInput } from "./StyleInput";
import React, { useEffect, useState } from "react";

export default function Input({ styles, setStyles }) {
  const [editable, updateEditable] = useState({ property: "", value: "" });
  const [currentStyles, updateCurrentStyles] = useState([]);
  const [isApplied, toggleApplied] = useState(false);
  useEffect(() => {
    updateCurrentStyles(
      Object.keys(styles).map((prop) => {
        return { property: prop, value: styles[prop], editable: false };
      })
    );
  }, [styles]);
  const handleEditable = (index) => {
    let currStyleArr = [...currentStyles];
    currStyleArr[index].editable = true;
    updateEditable(currStyleArr);
    // setStyles((prevStyles) => {
    //   const { [prop]: remVal, ...newStyles } = prevStyles;
    //   return newStyles;
    // });
  };

  const handleDelete = (prop) => {
    setStyles(newStyles => {
      delete newStyles[prop];
      return {...newStyles}
    })
  }

  return (
    <>
      <div className="style-input">
        <StyleInput setStyles={setStyles} />
      </div>
      {currentStyles.map((style, index) => (
        <div className={style.editable ? "style-input" : "style-display"} key={index}>
          {style.editable ? (
            <>
              <StyleInput
                prop={style.property}
                val={style.value}
                setStyles={setStyles}
              />
            </>
          ) : (
            <>
              <span
                style={{
                  textAlign: "left",
                  paddingLeft: "0.645rem",
                  color: "lightcoral",
                }}
              >
                {style.property}
                {" :"}
              </span>
              <span
                style={{
                  textAlign: "left",
                  paddingLeft: "0.645rem",
                  color: "aquamarine",
                }}
              >
                {style.value}
              </span>
              
              <button className="btn" onClick={() => handleEditable(index)}>
                ✏️
              </button>

              <button className="btn" onClick={() => handleDelete(style.property)}>
                ❌
              </button>
            </>
          )}
        </div>
      ))}
    </>
  );
}
