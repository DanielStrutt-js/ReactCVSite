import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import Btn from '../MenuBtn/MenuBtn';
import { elastic as Menu } from 'react-burger-menu'




class BurgerMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false,
      
    }

  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  

  render () {
    return (
      <div>

         
        <Menu 
          styles={styles}
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          
          <Btn title='HOME' link='/' />
          <Btn title="About me" link='/about' />
          <Btn title='What i can do' link='/iCanDo' />
          <Btn title='What im up to' link='/upTo'  />
          <Btn title='Projects' onClick={() => this.closeMenu()} />
          <Btn title='Contact me' link='/contact' />
          
          
        </Menu>
        
        
      </div>
    )
  }
}



  const mapDispatchToProps = dispatch => {
    return {
        onMainMenuClick: () => dispatch({type:'MAINMENU'}),
        onAboutMenuClick: () => dispatch({type:'ABOUTMENU'}),
        
    };
}

export default connect(null, mapDispatchToProps)(BurgerMenu)




var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px',
    
  },
  bmBurgerBars: {
    background: 'white'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#E956E4'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#252B38',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#252B38'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.5)'
  }
}