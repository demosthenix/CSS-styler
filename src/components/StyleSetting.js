import React, { useEffect, useState } from "react";
import Input from "./utils/UpdateStyles";

export default function StyleSetting({ element }) {
  const [styles, setStyles] = useState({});

  useEffect(() => {
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
