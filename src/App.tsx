import React from 'react';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <PageTitle title={'This is App title.'}/>
            <Rating value={2}/>
            <Accordion title={'Menu'} />
            <Accordion title={'Menu 2'} />
            <PageTitle title={'This is rating'}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

function PageTitle(props:any) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
