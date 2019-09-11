import React, { useRef, useState } from 'react';
import { render } from 'react-dom';
import './css/main.css';

const App = ( {posts, displayNumber, previousText, nextText, Show} ) => {
    const page = useRef();

    const previousTextVariable = previousText ? previousText : "Previous"
    const nextTextVariable = nextText ? nextText : "Next"
    const transient = posts
    const fixed = displayNumber ? parseInt(displayNumber) : 5;
    const lastElem = Number(Math.ceil(transient.length / fixed))

    const [current, setCurrent] = useState(1);

    const list = [];
    let variable = 0;

    var i = 1,
        j;
    if (fixed <= transient.length) {
        for (j = 0; j < (transient.length / fixed); j++) {
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

    const Previous = () => (
        current != 1 ? <li onClick={clicked}>{previousTextVariable}</li> : null
    )
    const Next = () => (
        current != lastElem ? <li onClick={clicked}>{nextTextVariable}</li> : null
    )

    const currentPosts = list.filter(currentData => currentData.id === current).map(value => value.include)

    return (
        <div ref={page} className="pagination">
            <ul>
                {currentPosts.map((value) => (
                    value.map((data) => (
                        <Show value={data} />
                    ))
                ))}
            </ul>
            <ul className="sayfalama">
                <Previous />
                {list.map((value) => (
                    value.id !== undefined ?
                        <li class={value.id === current ? "active" : "passive"} onClick={clicked}>{value.id}</li>
                        : null
                ))}
                <Next />
            </ul>
        </div>
    )
}
render(<App />, document.getElementById("root"));