import { useEffect, useState } from "react";

// importaciones de auditoria de terceros
import { getGifs } from "../helpers/getGifs";

// importaciones de auditoria propia
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  //funcion que obtiene las imagenes
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  // primer ussEffect (solo carga una vez al inicio de renderizar el componente)
  useEffect(() => {
    //cargardo una vez los datos
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
          images.map((image) => (
            <GifItem 
              key={image.id} 
              { ...image }
            />          
          ))
        }
      </div>
    </>
  );
};
