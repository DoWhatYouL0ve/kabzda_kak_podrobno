import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import React from "react";
import {AccordionPropsType} from "./Accordion";

export function Accordion2(props:AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.title}/>
                {props.collapsed && <AccordionBody/>}
            </div>
        )
}