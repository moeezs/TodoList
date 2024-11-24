
import { useState } from 'react';
import Popup from './components/Popup';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text: text }]);
  };

  return (
    <>
      <div className='w-full h-2em bg-offwhite flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-bold'>TODO LIST</h1>
        <button className='text-2xl font-bold border-2 border-black rounded-xl m-2 p-2 hover:bg-gray-200' onClick={() => setIsModalOpen(true)}>Add Task</button>
      </div>
      <div className='bg-gray-200 grid grid-cols-5 h-[calc(100vh-120px)] overflow-y-auto'>
        {tasks.map((task) => (
          <div className='bg-white m-2 p-2 text-center w-auto h-20 border-2 border-black rounded-xl flex items-center justify-center' key={task.id} id='taskItem'>
            <p>{task.text}</p>
            <button className='font-bold border-2 border-black rounded-xl m-2 p-2 hover:bg-gray-200' onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}>Delete</button>
          </div>
        ))}
      </div>

      <Popup 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={addTask}
      />
    </>
  );
}

export default App;