import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ITEMS } from '../hooks/getItems';

const List = () => {
  const { loading, error, data } = useQuery(GET_ITEMS);

  return (
    <div class='container'>
      <h1 class='mt-5'>Do These Things!</h1>
      <ul class='list-group'>
        {data && data.items && data.items.map((item) => {
          return <li class='list-group-item'>{item.description}</li>
        })}
      </ul>
    </div>
  );
};

export default List;