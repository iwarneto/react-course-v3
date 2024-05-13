import { useMutation } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import customFetch from '../utils/utils';

const Form = () => {
  const newTask = useRef(null);

  const mutation = useMutation({
    mutationFn: (newTodo) => {
      const response = customFetch.post('/', newTodo);
      return response
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({title: newTask.current.value})
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        {mutation.isPending ?
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
