import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchImagesProvider from './Contexts/SearchImgesContext';
import MainImages from './components/SearchImages';
import Header from './components/Common/Header';
import NavigationMenu from './components/Common/NavigationMenu';
import Footer from './components/Common/Footer';
import SaveImages from './components/SaveImages';

const App = () => (

  <BrowserRouter>  
    <Header /> 
    <NavigationMenu />
    <Switch>        
        <Route exact path='/'>
            <SearchImagesProvider > 
                <MainImages />
            </SearchImagesProvider>  
        </Route>
        <Route path='/misImages'>               
                <SaveImages/>   
            </Route>     
    </Switch> 
    <Footer />   
  </BrowserRouter> 
  
  );

export default App;
