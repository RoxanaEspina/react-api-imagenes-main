import React, { useState } from 'react';
import { guardarImagenLocalStorage, borrarImagenLocalStorage } from '../../constants';
import SaveIcon from './../../assets/img/floppy-icon.png';
import LikeIcon from './../../assets/img/heart-icon.png';
import './../../assets/css/style.css';

const SaveImageBtn = ({id, largeImageURL, likes, previewURL, tags, views, like }) => {

    const [liked, setLiked] = useState(like);  

    const onClick = () => {     
        
        if( !liked )
            guardarImagenLocalStorage(id, largeImageURL, likes, previewURL, tags, views);
        else 
            borrarImagenLocalStorage(id, largeImageURL, likes, previewURL, tags, views);       

        setLiked(!liked)  
    }
    
    return (
        <a
            //href='#'
            onClick={ onClick }
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-block likeBtn"
        >
        {           
           liked ?  <img src={ LikeIcon } className="save-img"/> :  <img src={ SaveIcon } className="save-img"/>
        }       
        </a>       
    );



}

SaveImageBtn.displayName = 'SaveImageBtn';

export default SaveImageBtn;