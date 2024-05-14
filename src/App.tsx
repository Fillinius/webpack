import React from 'react'

export default function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div className="wrap">
      <h2>Hello React + webpack</h2>
      <p>Count!:{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  )
}
