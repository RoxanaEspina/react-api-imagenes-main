import React from 'react';
import SaveImageBtn from './../Common/SaveImageBtn';

const Imagen = ({id, largeImageURL, likes, previewURL, tags, views, found}) => {

    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" />

                <div className="card-body">
                    <p className="card-text"><i class="fas fa-heart"></i> {likes} Me Gusta</p>
                    <p className="card-text"><i class="far fa-eye"></i> {views} Vistas</p>
                </div>

                <div className="card-footer">
                    <a
                        href={largeImageURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-block"
                    >Ver Imagen</a>                    
    
                    <SaveImageBtn id={ id } largeImageURL={ largeImageURL } likes={ likes } previewURL={ previewURL } tags={ tags } views={ views } like={ found }/>
                </div>
               
            </div>
        </div>
     );
}
 
export default Imagen;