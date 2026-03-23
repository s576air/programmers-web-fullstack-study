import { useState } from 'react';
import './App.css';

const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeed'
  },
  {
    id: 'cato',
    name: 'Little Cato'
  },
  {
    id: 'kvn',
    name: 'KVN'
  }
]

function App() {
  const [characters, setCharacters] = useState(finalSpaceCharacters);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Final Space Charactors</h1>

        {/* <darg drop context> */}
        <ul className='characters'>
          {characters.map(({id, name}, index) => {
            return (
              <li> {/* draggable */}
                <p>
                  {name}
                </p>
              </li>
            );
          })}
        </ul>
        {/* <darg drop context> */}
      </header>
    </div>
  );
}

export default App;
