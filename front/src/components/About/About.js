import React from "react";
import FlexView from 'react-flexview';
import classes from './About.module.css';



const AboutScreen = () => (

    
<FlexView vAlignContent ='center' hAlignContent='center' column className={classes.Flex}>
            
                  <text className={classes.Title} >ABOUT ME</text>

        <text className={classes.Text}>Hi, my names Daniel and Im a full stack
        javascript developer from England. </text>
        
        <text className={classes.Text2}>I have lived in France for the past 15 years
        where i worked as a industrial electrician before
        moving to </text>
        
        <text className={classes.Text3}>Paris to follow my dream of becoming a
        web developer.</text>


</FlexView>
)



export default AboutScreen