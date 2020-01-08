import React from "react";
import FlexView from 'react-flexview';


import Footer from "../components/HomeScreenBottom/HomeScreenBottom";
import Text from "../components/HomeScreenText/HomeScreenText";
import Logo from "../components/NameLogo/NameLogo";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu"


const mainMenu = () => (

   <FlexView  hAlignContent="center" vAlignContent="top">
       
    <Text/>
    <Logo/>
    <Footer/>
    </FlexView> 
)



export default mainMenu