import React from "react";

export default function Display({ref}) {
    return (
        <div className='display flex alce juce'>
        <div ref={ref} className='box'></div>
      </div>
    )
}