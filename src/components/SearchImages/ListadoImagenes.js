import React from 'react';
import Imagen from './Imagen';
import { buscarImagen, getFromLocalStorage } from '../../constants';

const ListadoImagenes = ({imagenes}) => {

    const imgArray = getFromLocalStorage(); 

    return ( 
        <div className="col-12  row">
            {
                imagenes.map(imagen => {

                    const {
                        id,
                        largeImageURL, 
                        likes, 
                        previewURL, 
                        tags, 
                        views                        
                    } = imagen; 

                    const found = buscarImagen(
                        id,
                        largeImageURL, 
                        likes, 
                        previewURL, 
                        tags, 
                        views, 
                        imgArray
                    );

                    return(    
                        <Imagen 
                            key={ id }
                            id={ id }
                            largeImageURL={ largeImageURL }
                            likes={ likes }
                            previewURL={ previewURL }
                            tags={ tags }
                            views={ views }
                            found={ found }        
                        />
                    );
                })
            }
        </div>
    );
}
 
export default ListadoImagenes;