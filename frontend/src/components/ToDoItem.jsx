import * as Ai from 'react-icons/ai';

const ToDoItem = ({ text, updateToDo, deleteToDo }) => {
  return (
    <div className='flex justify-center mb-4'>
      <div className='w-[280px] sm:w-[400px] md:w-[500px] rounded bg-white p-2 text-dark-blue drop-shadow-md'>
        {text}
      </div>
      <div className='ml-2 flex justify-center mt-2'>
        <Ai.AiFillEdit
          className='mr-4 hover:drop-shadow-md cursor-pointer'
          size={26}
          onClick={updateToDo}
        />
        <Ai.AiFillDelete
          className='hover:drop-shadow-md cursor-pointer'
          size={26}
          onClick={deleteToDo}
        />
      </div>
    </div>
  );
};

export default ToDoItem;
