import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import StyleSetting from './components/StyleSetting'
import { useRef } from 'react';
function App() {
  
  const box = useRef();

  return (

    <div className="App">
      <div className='container flex alce juce'>
        <div className='main-box'>
          <Display ref={box}/>
          <StyleSetting element={box}/>
        </div>
      </div>
    </div>
  );
}

export default App;
