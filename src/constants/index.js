const cors_anywhere = '';
const base_url = 'https://pixabay.com/api/';
const api_key = '18826541-2d70dd8c7942c2ed60e3bbf37';
const imgObject = {
    id:'',
    largeImageURL:'', 
    likes:0, 
    previewURL:'', 
    tags:'', 
    views:0
}

export const getImages = (busqueda, imagenesPorPagina, paginaactual) => `${cors_anywhere}${base_url}?key=${api_key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`;

export const imagenesPorPagina = 30;

export const guardarImagenLocalStorage = (id, largeImageURL, likes, previewURL, tags, views) => {
   
    let imagenJSON = localStorage.getItem('imagenesFavoritas');
    if(imagenJSON === null || imagenJSON === '')
        imagenJSON = []; 
    else 
        imagenJSON = JSON.parse(imagenJSON);     
   
    const img = Object.create(imgObject);
    img.id = id;
    img.largeImageURL = largeImageURL;
    img.likes = likes;
    img.previewURL = previewURL;  
    img.tags = tags;
    img.views = views;

    imagenJSON.push(img);

    localStorage.setItem('imagenesFavoritas',  JSON.stringify(imagenJSON));   
} 
export const borrarImagenLocalStorage = (id, largeImageURL, likes, previewURL, tags, views) => {

    let imagenJSON = localStorage.getItem('imagenesFavoritas');

    const img = Object.create(imgObject);
    img.id = id;
    img.largeImageURL = largeImageURL;
    img.likes = likes;
    img.previewURL = previewURL;  
    img.tags = tags;
    img.views = views; 
    
    if(imagenJSON !== null && imagenJSON !== '') {
        imagenJSON = JSON.parse(imagenJSON); 
        imagenJSON = imagenJSON.filter(imgs => JSON.stringify(imgs) !== JSON.stringify(img));

        localStorage.setItem('imagenesFavoritas',  JSON.stringify(imagenJSON));    
    }
       
    
} 
export const getFromLocalStorage = () =>{

    let imagenJSON = localStorage.getItem('imagenesFavoritas');
    
    if(imagenJSON === "")
        imagenJSON = [];
    else 
        imagenJSON = JSON.parse(imagenJSON);

    return imagenJSON;  
} 

export const buscarImagen = (id, largeImageURL, likes, previewURL, tags, views, arreglo) =>{

    let found = false;

    const img = Object.create(imgObject);
    img.id = id;
    img.largeImageURL = largeImageURL;
    img.likes = likes;
    img.previewURL = previewURL;  
    img.tags = tags;
    img.views = views; 
    
    if(Array.isArray(arreglo))
        found = arreglo.find(element => JSON.stringify(element) === JSON.stringify(img)) === undefined ? false : true;
    else
        localStorage.setItem('imagenesFavoritas',  []); 

    return found;  
} 

