import React, { useRef, useState } from 'react';
import './css/main.css';

const App = ( {data, displayNumber, previousText, nextText, Show} ) => {
    const page = useRef();

    const previousTextVariable = previousText ? previousText : "Previous"
    const nextTextVariable = nextText ? nextText : "Next"
    const transient = data
    const fixed = displayNumber ? parseInt(displayNumber) : 5;
    const lastElem = Number(Math.ceil(transient.length / fixed))

    const [current, setCurrent] = useState(1);

    const list = [];
    let variable = 0;

    var i = 1;
    var j = 0;
    if (fixed <= transient.length) {
        for (j = 0; j < Number(Math.ceil(transient.length / fixed)); j++) {
            list.push(
                {
                    id: i, include:
                        transient.slice(variable, variable + fixed)
                }
            )
            i += 1;
            variable += fixed
        }
    }
    else{
        list.push({
            id: 1, include: transient.slice(variable, transient.length)
        });
    }

    const clicked = (e) => {
        e.preventDefault()
        var value = e.target.innerHTML
        if (value === previousTextVariable) {
            if (value !== parseInt("1")) {
                setCurrent(parseInt(current) - 1)
            }
        }
        else if (value === nextTextVariable) {
            if (value !== parseInt(lastElem)) {
                setCurrent(parseInt(current) + 1)
            }
        }
        else {
            setCurrent(parseInt(value))
        }
    }
    
    const currentPosts = list.filter(currentData => currentData.id === current).map(value => value.include)

    return (
        <div ref={page} className="pagination">
            <ul>
                {currentPosts.map((value) => (
                    value.map((data) => (
                        <Show {...data} />
                    ))
                ))}
            </ul>
            <ul className="sayfalama">
                <li className="previos" id={current!==1 ? "active" : "passive"} onClick={clicked}>{previousTextVariable}</li>
                {list.map((value) => (
                    value.id !== undefined ?
                        <li class={value.id === current ? "active" : "passive"} onClick={clicked}>{value.id}</li>
                        : null
                ))}
                <li className="next" id={current!== lastElem ? "active" : "passive"} onClick={clicked}>{nextTextVariable}</li>
            </ul>
        </div>
    )
}

export default App;;