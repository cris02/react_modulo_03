import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GitfExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  

  // funcion que agrega una nueva seccion
  const onAddCategory = (newCategory) => {
    /*setCategories([
      ...categories,
      'Poquemon'
    ]);*/

    // segunda forma
    //setCategories(cat => [ ...cat, 'pokemon']);

    setCategories([
      newCategory,
      ...categories
    ]);

    
  }

  return (
    <>
      <h1>GitfExpertApp</h1>
      <AddCategory 
        onNewCategory = { onAddCategory }
      />

      <ol>
        {
          categories.map( c => {
            return <li key={c}>{c}</li>
          })
        }
      </ol>
    </>
  )
}
