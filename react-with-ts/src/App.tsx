import React, { useState, createContext } from 'react';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import Hello from './Hello';
import useMousePosition from './hooks/useMousePosition';
import useURLLoader from './hooks/useURLLoader';

interface IShowResult {
  message: string
  status: string
}

interface IThemeProps {
  [key: string]: { color: string; background: string}
}

const themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee'
  },
  'dark': {
    color: '#FFF',
    background: '#222'
  }
}

export const ThemeContext = createContext(themes.light)

const App: React.FC = () => {
  const position = useMousePosition()

  const [show, setShow] = useState<boolean>(true)
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
  const dogResult = data as IShowResult
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
      <header className="App-header">
        <h1>React Typescript</h1>
        <button onClick={() => setShow(show => !show)}>Refresh Show</button>
        <p>X:{position.x}, Y:{position.y}</p>
        <Hello />
        <LikeButton />
        <MouseTracker />
        {loading? <p>🐶读取中... </p>: (<><h1>{dogResult.status}</h1><img src={dogResult.message} /></>)}
      </header>

      </ThemeContext.Provider>
    </div>
  );
}

export default App;
