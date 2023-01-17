import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      <h3>{ category }</h3>

      {
        isLoading && <h2> Cargando... </h2>
      }

      <div className="card-grid">
        {
          images.map( ( img ) => (
            <GifItem 
              key={ img.id }
              // title={ img.title } // ---> acá mando CADA PROP en forma INDIVIDUAL 
              // url={ img.url } // ---> acá mando CADA PROP en forma INDIVIDUAL
              { ...img } // ---> de esta manera mando TODAS LAS PROPS y recibo las que quiero
            />
          ))
        }        
      </div>
    </>
  )
}
