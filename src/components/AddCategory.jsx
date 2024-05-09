import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    //declaracion del hook
    const [ inputValue, setInputValue ] = useState('')

    // seccionn de change
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return; 

        //emite la funcion que envia el componente padre
        onNewCategory(inputValue.trim());
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
