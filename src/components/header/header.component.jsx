import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuOpen: false,
            ariaExpanded: false,
        }
    }

    handleMobileMenu = () => (
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen
          })
        )
    );

    closeMobileMenu = () => (
        this.setState(prevState => ({
            menuOpen: false
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
        const {user} = this.props;
            
        return (
            <header className='header'>
                <Link to='/'>
                    <Logo className='logo'  onClick={this.closeMobileMenu}/>
                </Link>
                <div className='options-container'>
                    <button 
                        onClick={this.handleMobileMenu} 
                        aria-expanded={this.state.menuOpen}
                        className={'hamburger hamburger--spin mobile-menu' + (this.state.menuOpen ? ' is-active' : '')}
                        type='button'
                        >
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                    </button>
                    <ul className={'options' + (this.state.menuOpen ? ' visible' : '')}>
                        <Link className='option' to='/shop' onClick={this.closeMobileMenu}>SHOP</Link>
                        {
                            user ?
                            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> 
                            : 
                            <Link className='option' to='/sign'  onClick={this.closeMobileMenu}>SIGN IN</Link>
                        }
                    </ul>
                </div>
            </header>
        )
    }
}

const mapStateProps = state => ({
    user: state.user.currentUser
});

export default connect(mapStateProps)(Header);