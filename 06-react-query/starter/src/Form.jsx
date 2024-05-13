import { useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { useCreateTasks } from '../hooks/RESTHooks';

const Form = () => {
  const newTask = useRef(null);
  const queryClient = useQueryClient()

  const {mutate:createTask, isLoading} = useCreateTasks(queryClient)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newTask.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        {isLoading ?
          <p>
            Loading...
          </p>
          :
          <input
            type='text '
            className='form-input'
            ref={newTask}
          />
        }
        <button type='submit' className='btn'>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
