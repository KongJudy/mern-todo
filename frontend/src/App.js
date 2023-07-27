import { useEffect, useState } from 'react';
import ToDoItem from './components/ToDoItem';
import { addToDo, updateToDo, getAllToDo, deleteToDo } from './utils/HandleApi';

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState('');
  const [update, setUpdate] = useState(false);
  const [toDoId, setToDoId] = useState('');

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const editToDo = (_id, text) => {
    setUpdate(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className='App bg-gradient-blue min-h-screen'>
      <div className='mx-auto  text-center h-full py-10 tracking-widest '>
        <span className='text-4xl font-bold'>To Do List</span>
        <div className='flex justify-center'>
          <div className='w-[280px] sm:w-[400px] md:w-[500px] rounded mt-8 text-center  border-dark-blue border-2'>
            <input
              className='w-[100%] rounded text-dark-blue font-semibold p-4 drop-shadow-lg'
              type='text'
              placeholder='Add todo'
              maxLength={38}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button
            className='rounded ml-4 bg-yellow text-dark-blue px-4 tracking-wider border-dark-blue border-2 hover:bg-dark-blue hover:text-yellow hover:drop-shadow-md font-semibold h-[40px] mt-10'
            onClick={
              update
                ? () => updateToDo(toDoId, text, setToDo, setText, setUpdate)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {update ? 'Update' : 'Add'}
          </button>
        </div>
      </div>

      <div>
        {toDo.map((item) => (
          <ToDoItem
            key={item._id}
            text={item.text}
            editToDo={() => editToDo(item._id, item.text)}
            deleteToDo={() => deleteToDo(item._id, setToDo)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
