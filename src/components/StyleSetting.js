import React, { useEffect, useState } from "react";
import Input from "./utils/Input";

export default function StyleSetting({element}) {
    const [styles, setStyles] = useState({});

    useEffect(() => {
        for(let property in styles) {
            console.log(element)
            document.getElementsByClassName('box')[0].style[property] = styles[property];
        }
    }, [styles])
    
    return (
        <div className='styles'>


                <Input styles={styles} setStyles={setStyles}/>
        </div>
    )
}