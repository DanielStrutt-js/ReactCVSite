import React from "react";
import { AwesomeButton } from "react-awesome-button";
import FlexView from 'react-flexview';
import classes from "../MenuBtn/MenuBtn.module.css"
import "../MenuBtn/styles.css";
import {Link} from 'react-router-dom';



function Button(props) {
  
 const linkTo =  <Link className={classes.Link} to={props.link}>{props.title}</Link>
    
  

  

  
  return (

<FlexView className={classes.Btn}>
    <AwesomeButton
      
      className={classes.awsbtn}
      type="primary"
      
    >
      
      
      {linkTo}
      
    </AwesomeButton>
</FlexView>
  );
}

export default Button