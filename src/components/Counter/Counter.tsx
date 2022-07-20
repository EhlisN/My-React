import React, { useState } from 'react';
import ButtonProps from '../ButtonProps/ButtonProps';

const Counter = () => {
    let initialCount = 0;
    const [count, setCount] = useState(initialCount);
    return (
        // <div>
        //     Счёт: {count}
        //     <button onClick={() => setCount(initialCount)}>Сбросить</button>
        //     <button onClick={() => setCount(prevState => prevState - 1)}>-</button>
        //     <button onClick={() => setCount(prevState => prevState + 1)}>+</button>
        // </div>
        <>
            <h1>Счёт: {count}</h1>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(initialCount)}>Сбросить</button>
            {/* <button onClick={() => setCount(count + 1)}>+</button> */}
            <ButtonProps onClick={() => setCount(count + 1)}>+</ButtonProps>
        </>
    )
}

export default Counter
