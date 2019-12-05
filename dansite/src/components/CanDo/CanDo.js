import React from "react";
import FlexView from 'react-flexview';
import classes from './CanDo.module.css';

import FigmaLogo from '../../img/figma.svg';
import XdLogo from '../../img/xd.svg';
import IlustraLogo from '../../img/ilustra.svg';
import Html from '../../img/html5.svg';
import Javascript from '../../img/javascript.svg';
import Css from '../../img/css3.svg';
import Jquery from '../../img/jquery.svg';
import ReactLogo from'../../img/react-1.svg';
import Node from '../../img/nodejs-1.svg';
import Express from '../../img/express.svg';
import Git from '../../img/git.svg';
import GitHub from '../../img/github.svg';

const CanDoScreen = () => (

    
<FlexView vAlignContent ='center' hAlignContent='center' column className={classes.Flex}>
            
                  <text className={classes.Title} >What i code with:</text>

        <text className={classes.Text}> Design:</text>
        <FlexView hAlignContent='center'>
            <img className={classes.Logo} src={FigmaLogo}/>
            <img className={classes.Logo} src={XdLogo} />
            <img className={classes.Logo} src={IlustraLogo} />
        </FlexView>

        <text className={classes.Text}> Front-end:</text>
        <FlexView hAlignContent='center'>
            <img className={classes.Logo} src={Html}/>
            <img className={classes.Logo} src={Javascript} />
            <img className={classes.LogoCss} src={Css} />
            <img className={classes.Logo} src={ReactLogo} />
            <img className={classes.LogoJ} src={Jquery} />
        </FlexView>

        <text className={classes.Text}> Back-end:</text>
        <FlexView hAlignContent='center'>
            <img className={classes.LogoJ} src={Node} />
            <img className={classes.LogoJ} src={Express}/>
            
            
        </FlexView>

        <text className={classes.Text}> Workflow:</text>
        <FlexView hAlignContent='center'>
            <img className={classes.LogoJ} src={Git}/>
            <img className={classes.LogoCss} src={GitHub} />
            
        </FlexView>

        
        
        


</FlexView>
)



export default CanDoScreen