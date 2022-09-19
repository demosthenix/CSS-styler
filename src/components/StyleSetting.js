import React, { useEffect, useState } from "react";
import Input from "./utils/UpdateStyles";

export default function StyleSetting({ element }) {
  const [styles, setStyles] = useState({});

  useEffect(() => {
    console.log(styles)
    element.current.style = {backgroundColor: "aquamarine"}
    for (let property in styles) {
      //   console.log(element);
      element.current.style[property] = styles[property];
    }
  }, [styles]);

  return (
    <div className="styles">
      <Input styles={styles} setStyles={setStyles} />
    </div>
  );
}
