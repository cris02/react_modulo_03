import { useState } from 'react';

export const AddCategory = ({ setCategories }) => {

    //declaracion del hook
    const [ inputValue, setInputValue ] = useState('')

    // seccionn de change
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return; 
        //settear el hook del componente padre
        setCategories((categories) => [
            inputValue,
            ...categories          
        ]);
        setInputValue('');
    }
  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
    
  )
}
