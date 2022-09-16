import React from "react";

export default function Display({ element }) {
  return (
    <div className="display flex alce juce">
      <div ref={element} className="box"></div>
    </div>
  );
}
