import React from "react";
import FlexView from 'react-flexview';
import classes from './Contact.module.css';

import Email from '../Email/EmailForm'



const AboutScreen = () => (

    
<FlexView vAlignContent ='center' hAlignContent='center' column className={classes.Flex}>
            
                  <text className={classes.Title} >Contact</text>

        <text className={classes.Text}>If you would like to contact me please feel free to send me a e-mail any time </text>
        
        <text className={classes.Text2}>by filling in the contact form bellow. </text>
        
        <Email/>


</FlexView>
)



export default AboutScreen