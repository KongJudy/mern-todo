import ToDoItem from './components/ToDoItem';

function App() {
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
            />
          </div>
          <button className='rounded ml-4 bg-yellow text-dark-blue px-4 tracking-wider border-dark-blue border-2 hover:bg-dark-blue hover:text-yellow hover:drop-shadow-md font-semibold h-[40px] mt-10'>
            Add
          </button>
        </div>
      </div>

      <div>
        <ToDoItem text={'hello'} />
        <ToDoItem text={'hello'} />
        <ToDoItem text={'hello'} />
        <ToDoItem text={'hello'} />
      </div>
    </div>
  );
}

export default App;
