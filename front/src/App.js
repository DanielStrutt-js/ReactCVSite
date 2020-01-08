import React, {Component} from 'react';
import { connect } from 'react-redux';
import FlexView from 'react-flexview';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import MainMenu from './pages/MainMenu';
import AboutMenu from './pages/AboutMenu';
import CanDoMenu from './pages/CanDoMenu';
import UpToMenu from './pages/UpToMenu';
import ContactMenu from './pages/ContactMenu';

class App extends Component{

  
  
  
  render() {
    
    return(
        
      <FlexView hAlignContent="center" vAlignContent="top" >
       
       
           
          <Router>
          <BurgerMenu/>
            <Switch>
            
                    <Route path="/" exact component={MainMenu}/>
                    <Route path="/about" component={AboutMenu}/>
                    <Route path="/iCanDo" component={CanDoMenu}/>
                    <Route path="/upTo" component={UpToMenu}/>
                    <Route path="/contact" component={ContactMenu}/>

            </Switch>
          </Router> 
         
            
            
      </FlexView>

      );
    }}

    const mapStateToProps = state => {
      return {
    
         ctr: state.menu
      }};

   export default connect(mapStateToProps)(App);
