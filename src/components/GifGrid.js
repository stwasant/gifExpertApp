import React, {Fragment } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGits';

export const GifGrid = ({ category }) => {

    // const state = useFetchGifs();
    // El useFetchGifs es un custom Hooks creado
    // console.log(category);
    const { data:images, loading } = useFetchGifs( category );

    // console.log(loading);

  // Con el useState controlabamos los estados.
//   const [images, setImages] = useState([]);

  // con el useEffect permite controlar que una parte del codigo se renderice una vez.
//   useEffect(() => {
//     // como getGifs es un helper asincrono , se trata como un call back se puede tratar con el .then
//     getGifs( category )
//     .then( img => setImages( img )); 
//   }, [ category ]);

 

  return (
    <Fragment>
      <h3>{category}</h3>

      {/* { loading ? 'Data cargando..' : 'Cargada finalizada'} */}
      { loading && <p>Loading..</p>}
      <div className='gifgrid'>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </Fragment>
  );
};
