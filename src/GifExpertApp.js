import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  // para Agregar a la lista
  //   const handleadd = () => {
  //     // setCategories(['XMAN',...categories]);
  //     setCategories(catg => ['XMAN',...catg]);
  //   };
  return (
    <div>
      <div>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr />
        {/* <button onClick={handleadd}>Agregar</button> */}

        <ol>
          {categories.map((category) => (
            <GifGrid 
            key= {category}
            category={category} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default GifExpertApp;
