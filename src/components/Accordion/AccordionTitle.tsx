import React from "react";

type AccordionTitleType = {
    title: string
}

export function AccordionTitle(props:AccordionTitleType) {
    return(
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}