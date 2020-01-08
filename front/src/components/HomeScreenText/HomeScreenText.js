import React from "react";
import FlexView from 'react-flexview';
import classes from './HomeScreenText.module.css';



const homeText = (props) => (
    <FlexView hAlignContent="top" vAlignContent="top" column="true" className={classes.Container}>
    
    <text className={classes.HomeText} >Hi,<br/>
                                        I'm Daniel,<br/>
                                        a full stack web developer.<br/></text>
          <text className={classes.HomeTextUnder} >Javascript, ReactJS, React-Native, Node.js, Mongodb, Express</text>
         
          <img className={classes.TextBar}  alt='main screen textbar' src={require("../../textBar.png") } />
    
    <ul className={classes.ListContainer} >
        <li className={classes.List} >Javascript</li>
        <li className={classes.List}>ReactJS/React Native</li>
        <li className={classes.List}>Node.Js</li>
        <li className={classes.List}>Mongodb</li>
        <li className={classes.List}>Express</li>
    </ul>
    
    
    </FlexView>
)



export default homeText