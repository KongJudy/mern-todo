function App() {
  return (
    <div className='App'>
      <div className='text-center h-full py-10 tracking-widest'>
        <span className='text-4xl font-bold'>To Do List</span>
        <div className='mt-8 text-center'>
          <input
            className='border-dark-blue border-2 rounded w-[400px] p-2 text-dark-blue font-semibold hover:drop-shadow-lg'
            type='text'
            placeholder='Add ToDo'
            maxLength={38}
          />
          <button className='rounded ml-4 bg-yellow text-dark-blue px-4 py-2 tracking-wider hover:bg-dark-blue hover:text-yellow hover:drop-shadow-md'>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
