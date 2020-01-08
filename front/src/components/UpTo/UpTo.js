import React from "react";
import FlexView from 'react-flexview';
import classes from './UpTo.module.css';



const UpToScreen = () => (

    
<FlexView vAlignContent ='center' hAlignContent='center' column className={classes.Flex}>
            
                  <text className={classes.Title} >What I'm up to</text>

        <text className={classes.Text}>After having completed a full stack coding bootcamp at La Capsule Academy, </text>
        
        <text className={classes.Text2}>I am currently looking for a internship or full time position in or around Paris.</text>
        
        


</FlexView>
)



export default UpToScreen