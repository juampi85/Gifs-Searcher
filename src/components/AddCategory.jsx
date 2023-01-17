import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState('');
  // SIN desestructurar
  //********************
  // const onInputChange = ( e ) => {
  //   console.log(e.target.value);
  //   setInputValue(e.target.value);
  // };

  // DESESTRUCTURANDO
  //******************
  const onInputChange = ( { target } ) => {
    setInputValue(target.value);
  };

  const onEnterPress = ( e ) => {
    e.preventDefault();

    if (inputValue.trim().length < 1) return; 
      
    onNewCategory( inputValue.trim() );
    setInputValue(''); // así LIMPIO la caja del input
  };

  return (
    <form onSubmit={ onEnterPress }>  {/* se pone acortado, porque la FUNCIÓN y el ARGUMENTO que envío son IGUALES*/}
      <input 
        type="text" 
        placeholder="Search a category..."
        value={ inputValue }
        // onChange={ e => onInputChange(e) }
        onChange={ onInputChange } // es IGUAL a la línea de arriba pero acortado, porque la FUNCIÓN y el ARGUMENTO que envío son IGUALES
      />
    </form>
  )
}
