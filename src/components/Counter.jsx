// useState() - is our React hook that allows us to create a state variable and setState function
import { useState } from "react"

const Counter = () => {

    const [counter, setCounter] = useState(0);

    return (
        <>
            <div>Counter {counter}</div>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            <button onClick={() => setCounter(counter + 10)}>Increment by 10</button>
        </>
    )
}

export default Counter