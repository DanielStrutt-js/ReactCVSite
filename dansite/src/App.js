import React from 'react';
import FlexView from 'react-flexview';


import Footer from './components/HomeScreenBottom/HomeScreenBottom';
import DLogo from './components/NameLogo/NameLogo';
import HomeText from './components/HomeScreenText/HomeScreenText';
import Btn from './components/MenuBtn/MenuBtn';
import BurgerMenu from './components/BurgerMenu/BurgerMenu'



function App (){
  
    return(
        
      <FlexView hAlignContent="center" vAlignContent="top" >
       
       <BurgerMenu/>
            <HomeText/>
             <DLogo/>
            <Footer/>
            
            
      </FlexView>

      );
    }


export default App;
