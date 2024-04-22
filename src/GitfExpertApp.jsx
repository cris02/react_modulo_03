import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GitfExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  

  // funcion que agrega una nueva seccion
  const onAddCategory = () => {
    /*setCategories([
      ...categories,
      'Poquemon'
    ]);*/

    setCategories([
      'Pokemon',
      ...categories
    ]);

    // segunda forma
    //setCategories(cat => [ ...cat, 'pokemon']);
  }

  return (
    <>
      <h1>GitfExpertApp</h1>
      <AddCategory setCategories = { setCategories } />

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
