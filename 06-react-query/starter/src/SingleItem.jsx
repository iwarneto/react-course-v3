import { useQueryClient } from "@tanstack/react-query";
import { useDeleteTask, useEditTask } from "../hooks/RESTHooks";

const SingleItem = ({ item }) => {
  const queryClient = useQueryClient()

  const {mutate:editItem} = useEditTask(queryClient)

  const {mutate:deleteItem} = useDeleteTask(queryClient)

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => editItem(item)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => deleteItem(item)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
