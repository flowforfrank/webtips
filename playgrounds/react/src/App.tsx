import { useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0)

    return (
        <main>
            <h1>React Playground</h1>
            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>
        </main>
    )
}

export default App
