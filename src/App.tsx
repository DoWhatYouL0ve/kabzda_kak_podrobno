import React from 'react';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {Accordion2} from "./components/Accordion/Accordion2";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    return (
        <div className="App">
            <PageTitle title={'This is App title.'}/>
            <Rating value={2}/>
            <Accordion title={'Menu'} collapsed={false}/>
            <Accordion title={'Menu collapsed'} collapsed={true}/>
            <PageTitle title={'This is rating'}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <hr/>
            <Accordion2 title={'Refactored Accordion'} collapsed={false}/>
            <hr/>
            <OnOff />
        </div>
    );
}

type PageTitleType = {
    title: string
}

function PageTitle(props:PageTitleType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
