import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ITEMS } from '../hooks/getItems';

const List = () => {
  const { data } = useQuery(GET_ITEMS);

  return (
    <div className='container'>
      <h1 className='mt-5'>Do These Things!</h1>
      <ul className='list-group'>
        {data && data.items && data.items.map((item) => {
          return <li key={item.id} className='list-group-item'>{item.description}</li>
        })}
      </ul>
    </div>
  );
};

export default List;