import React, { useEffect, useState } from 'react';
import './App.css'
import './DatePicker.css'
import YES from './YES.gif'

function DatePicker() {
    const [animating, setAnimating] = useState(false)

    

    return (
        <div className="App">
      <header className="App-header">
        <h1>Will you go out with me?</h1>
        <div className='Buttons'>
            <button className='Button Yes-Button' onClick={() => setAnimating(true)}>
                Yes chef of course 🤠
            </button>
            <button className='Button No-Button' >
                Nahh I'm busy that day 🥸
            </button>
        </div>
        <br></br>
        <div>
        {animating && <img src={YES}/>}
        </div>
      </header>
    </div>
    );
}

export default DatePicker;