import {useState} from 'react'
import './App.css';
import Button from './components/Button';

function App() {
  const [totalNumOfClicks, setTotalNumOfClicks] = useState(0)
  

  const incrementClicks=()=>{
    setTotalNumOfClicks(totalNumOfClicks+1)
    
  }

  return (
    <div className="App">
      <header className="App-header">
      <Button title='You have clicked' incrementClicks={incrementClicks}/>
      <Button  title='Have you clicked?' incrementClicks={incrementClicks}/>
      <Button  title='Dont click this button' incrementClicks={incrementClicks}/>
      <p>Total {totalNumOfClicks}</p>
      </header>
    </div>
  );
}

export default App;
