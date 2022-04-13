import React, {useState} from "react";
import style from './OnOff.module.css'


export const OnOff = () => {

    const [state, setState] = useState(true)

    const changeState = () => {
        setState(!state)
    }

    return (
        <div>
            <div className={`${state ? style.green : ''} ${style.buttonStyles}`} onClick={changeState}>On</div>
            <div className={`${!state ? style.red : ''} ${style.buttonStyles}`} onClick={changeState}>Off</div>
            <div className={`${!state ? style.red : style.green} ${style.round}`}></div>
        </div>
    )
}