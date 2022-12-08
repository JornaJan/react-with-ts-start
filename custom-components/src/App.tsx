import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/Button';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Button Custom Component</h1>
      <Button disabled>Default Button</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Style Button</Button>
      <Button btnType={ButtonType.Link} href="https://cn.bing.com/translator">A Link To Bing</Button>
    </div>
  );
}

export default App;
