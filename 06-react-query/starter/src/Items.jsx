import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from '../utils/utils';
import { useGetTasks } from '../hooks/RESTHooks';

const Items = () => {
  const {isLoading, data} = useGetTasks();

  if (isLoading) {
    return <p style={{marginTop: "2 rem"}}>Loading...</p>
  }

  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
