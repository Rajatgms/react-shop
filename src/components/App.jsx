import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Hello!!!</div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default App;
