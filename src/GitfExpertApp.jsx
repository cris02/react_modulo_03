import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitfExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  
  // funcion que agrega una nueva seccion
  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

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

      {
        categories.map( (category) => (
          <GifGrid 
            key={category}
            category={ category } 
          />
        ))
      }
  
    </>
  )
}
