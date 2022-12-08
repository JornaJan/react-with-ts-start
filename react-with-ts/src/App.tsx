import React, { useState } from 'react';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import Hello from './Hello';
import useMousePosition from './hooks/useMousePosition';
import useURLLoader from './hooks/useURLLoader';

interface IShowResult {
  message: string
  status: string
}

function App() {
  const position = useMousePosition()

  const [show, setShow] = useState(true)
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
  const dogResult = data as IShowResult
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Typescript</h1>
        <button onClick={() => setShow(show => !show)}>Refresh Show</button>
        <p>X:{position.x}, Y:{position.y}</p>
        <Hello />
        <LikeButton />
        <MouseTracker />
        {loading? <p>🐶读取中... </p>: (<><h1>{dogResult.status}</h1><img src={dogResult.message} /></>)}
      </header>
    </div>
  );
}

export default App;
