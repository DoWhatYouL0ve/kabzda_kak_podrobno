import React, {useState} from "react";
import {Star} from "./Star/Star";

export function UncontrolledRating() {

    const [value, setValue] = useState(0)

    const onClickHandler = (num: number) => {
        setValue(num)
    }

    return(
        <div>
            <Star selected={value > 0}/><button onClick={()=>{onClickHandler(1)}}>+</button>
            <Star selected={value > 1}/><button onClick={()=>{onClickHandler(2)}}>+</button>
            <Star selected={value > 2}/><button onClick={()=>{onClickHandler(3)}}>+</button>
            <Star selected={value > 3}/><button onClick={()=>{onClickHandler(4)}}>+</button>
            <Star selected={value > 4}/><button onClick={()=>{onClickHandler(5)}}>+</button>
        </div>
    )
}

