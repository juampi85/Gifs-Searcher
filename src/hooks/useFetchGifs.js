import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';



export const useFetchGifs = ( category ) => {

    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true );

// usando ASYNC AWAIT
// ******************  
  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages( newImages );
    setIsLoading( false );
  }

  useEffect(() => {
    getImages();
  }, [])


// Haciéndolo DIRECTAMENTE
// ***********************
  // useEffect(() => {
  //   getGifs( category )
  //     .then( newImages => setImages( newImages ));

  // }, [])

  return (
    {
      images, // ---> es lo mismo que poner "images: images,"
      isLoading // ---> es lo mismo que poner "isLoading: isLoading"
    }
  )
};
