import Container from './Container'
import Content from './Content'
import Summary from './Summary';
import './App.css';
import './responsive.css';
import { useState } from 'react'

function App() {
  const [isStart, setIsStart] = useState(false)
  const [timeStart,setTimeStart] = useState(0)
  const handleStart = () => {
    setIsStart(true);
    setTimeStart(Date.now());
  }
  const handlePlayAgain = () => {
    setIsStart(false);
  };
  return (
    <div className="App">
      {isStart ? (
        <Content  
          handlePlayAgain={handlePlayAgain}
          timeStart={timeStart}
        />
      ) : (
        <Container
          handleStart={handleStart}
        />
      )
      }
    </div>
  );
}

export default App;
