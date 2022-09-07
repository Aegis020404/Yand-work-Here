import './App.css';

import React, {useState} from 'react';
import {conf} from "./ramk";

const App = () => {
    const [count, setCount] = useState(1)
    const [cWidth, setWidth] = useState(1000)
    const [cHeight, setHeight] = useState(1000)
    console.log(conf(count, cWidth, cHeight))
    const [mark, setMark] = useState([])
    return (
        <div>
            <input type="text" value={count} onChange={(e)=>setCount(e.target.value)}/>
            <input type="text" value={cWidth} onChange={(e)=>setWidth(e.target.value)}/>
            <input type="text" value={cHeight} onChange={(e)=>setHeight(e.target.value)}/>
            <button onClick={() => setMark(conf(count, cWidth, cHeight))}>click</button>
            <div style={{border:'1px solid blue', margin: '20px 20px', position: 'relative',
                 width:`${cWidth}px`,
                height:`${cHeight}px`}}>
                {mark.map((el, i) =>
                    <div style={{
                        width: el.width, height: el.height, position: "absolute", top: el.y, left: el.x,
                        border: '1px solid red', background: 'blue'
                    }}
                         key={i}>
                        {i}
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
