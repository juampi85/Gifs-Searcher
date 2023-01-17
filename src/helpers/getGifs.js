export const getGifs = async( category ) => {

  const URL = `https://api.giphy.com/v1/gifs/search?api_key=GBGvBgZv5CYLBZCDSAbYBWnieS0uQuBM&q=${ category }&limit=10`
  const resp = await fetch( URL );
  const { data } = await resp.json();    


  const gifs = data.map( ({ id, title, images }) => ({
    id: id,
    title: title,
    url: images.downsized_medium.url,
  }))

  return( gifs );
};