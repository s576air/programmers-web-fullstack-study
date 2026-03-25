import { useState } from 'react';
import './App.css';
import { closestCenter, DndContext } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import { Item } from './Item';

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
  
  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = characters.findIndex(c => c.id === active.id);
      const newIndex = characters.findIndex(c => c.id === over.id);

      setCharacters(arrayMove(characters, oldIndex, newIndex));
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Final Space Charactors</h1>

        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <ul className='characters'>
            <SortableContext items={characters.map(c => c.id)}>
              {characters.map(({id, name}) => (
                <Item key={id} id={id} name={name} />
              ))}
            </SortableContext>
          </ul>
        </DndContext>
      </header>
    </div>
  );
}

export default App;
