import React from "react";
import { AwesomeButton } from "react-awesome-button";
import FlexView from 'react-flexview';
import classes from "../MenuBtn/MenuBtn.module.css"
import styles from 'react-awesome-button/src/styles/themes/theme-rickiest';



function Button(props) {
  return (

<FlexView className={classes.Btn}>
    <AwesomeButton
      
      css={styles}
      type="primary"
    >
      <text className={classes.BtnText} >{props.title} </text>
    </AwesomeButton>
</FlexView>
  );
}

export default Button