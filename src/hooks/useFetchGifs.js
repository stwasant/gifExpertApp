import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGits';

export const useFetchGifs = ( category ) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

//   console.log (' category hooks ' + category);
  useEffect(() => {
    getGifs(category)
    .then((img) => {
     
        setState({
          data: img,
          loading: false,
        });
     
    });
  }, [category]);


  return state;
};
