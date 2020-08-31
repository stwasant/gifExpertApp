import React, { useState } from 'react';
import PropTypes from 'prop-types';



export const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
};

  const handleSubmit = (event) => {
    // con esto evitamos el refresh del componente form
    event.preventDefault();
    
    if (inputValue.trim().length > 2) {
        setCategories(catg => [inputValue,...catg]);
        setInputValue('');
    }

  };
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <h2>Add Category</h2>
        <input  type='text' 
                value={inputValue} 
                onChange={handleInputChange} 
        />
      </form>
    </div>
  );
};

// De esta manera se pueden definir los tipos y si es requerido las properties del componente
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
  };
  