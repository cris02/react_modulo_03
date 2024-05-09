export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=7at9wKY9hBHlnYiUqQQr5lAeqq8XxODi&q=${category}&limit=10 `;
  const resp = await fetch(url);
  const { data } = await resp.json();


  // retorna la busqueda de los gifs
  return data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
};
