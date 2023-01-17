import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  
  const onAddCategory = ( newCategory ) => { // podemos poner CUALQUIER NOMBRE aquí para recibir lo ENVIADO por el hijo

    if (categories.includes( newCategory )) return;

    setCategories([ newCategory, ...categories ]) // de esta manera la NUEVA categoría aparece PRIMERA
  };
  
  return (
    <>
      <h1> Search your favourite GIF </h1>

      <AddCategory 
        onNewCategory = { onAddCategory } // el onNewCategory puede ser CUALQUIER NOMBRE, siempre que se reciba el mismo como prop en el HIJO
      />

        { 
          categories.map( category => (
            <GifGrid 
              key={ category } 
              category={ category }
            />
          )) 
        }
    </>
  )
}

export default GifExpertApp;