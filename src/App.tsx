import React from 'react';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <PageTitle title={'This is App title.'}/>
            <Rating value={2}/>
            <Accordion title={'Menu'} collapsed={false}/>
            <Accordion title={'Menu collapsed'} collapsed={true}/>
            <PageTitle title={'This is rating'}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
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
