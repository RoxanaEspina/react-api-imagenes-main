import React, { Fragment, useContext } from 'react';
import ListadoImagenes from './ListadoImagenes';
import { getFromLocalStorage } from '../../constants';
import Error from './../Common/Error';
import './../../assets/css/style.css';


const SaveImages =() =>{

    const miLista = getFromLocalStorage();
    console.log(miLista);
    
    return(
        <div className="container">    
            <div className="row justify-content-center scroll main-paginador">
            {    
                miLista === null || miLista.length == 0 
                ?
                    (
                        <Error mensaje='No posee imagenes guardadas'/>
                    )                
                :
                    (
                        <ListadoImagenes 
                            imagenes={miLista}
                        />
                    )
            }               
            </div>
        </div>
    )
};

SaveImages.displayName = 'SaveImages';
export default SaveImages;

