import { useState } from 'react';
import { ShowRollTable } from './functions/Roll_Functions';
import './App.css';

function App() {

    const [x, setX] = useState(0)    


  return (
    <div className="App">
      <h1>D&D Utils</h1>
      <ShowRollTable tableName={'background_city'} setResult={setX} />
      <p>{x}</p>
    </div>
  );
}

export default App;
