import React from 'react';

function App() {
    return (
        <div className="App">
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    return (
        <div className={'Rating'}>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {
    return (
        <div>
            <div>star</div>
        </div>
    )
}

function Accordion() {
    return (
        <div>
            <ul>
                <h3>Menu</h3>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
