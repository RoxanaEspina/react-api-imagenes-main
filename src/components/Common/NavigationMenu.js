import React, { Fragment } from 'react';
import './../../assets/css/style.css';

const NavigationMenu = () => {
    return(
        <Fragment>
            <nav class="nav-header">
                <ul>
                    <li><a href='/'>HOME</a></li>
                    <li><a href='/misImages'>IMAGENES GUARDADAS</a></li>                   
                </ul>
            </nav>           
        </Fragment>
    );   
}

NavigationMenu.displayName = 'NavigationMenu';

export default NavigationMenu;