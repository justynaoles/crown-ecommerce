import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg'; 

class Header extends React.Component {
    state = {
        menuOpen: false,
        ariaExpanded: false
    }

    
    handleMobileMenu = () => (
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen
          })
        )
    );

    updateDimensions = () => {
        if(window.innerWidth >= 992) {
            this.setState(prevState => ({
                menuOpen: false
              })
            )
        }
      };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }


    render() {
        return (
            <header className='header'>
                <Link to='/'>
                    <Logo className='logo'/>
                </Link>
                <div className='options-container'>
                    <button 
                        onClick={this.handleMobileMenu} 
                        aria-expanded={this.state.menuOpen}
                        className='mobile-menu'
                        type='button'
                        >
                        Mobile menu
                    </button>
                    <ul className={'options' + (this.state.menuOpen ? ' visible' : '')}>
                        <Link className='option' to='/shop'>SHOP</Link>
                        <Link className='option' to='/sign'>SIGN</Link>
                    </ul>
                </div>
            </header>
        )
    }
}


export default Header;