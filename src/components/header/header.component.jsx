import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {toggleMobileMenu, closeMobileMenu} from '../../redux/mobile-menu/mobile-menu.actions';
import { selectorCurrentUser } from '../../redux/user/user.selectors';
import { selectorHiddenCart } from '../../redux/cart/cart.selectors';
import { selectorIsMobileMenuHidden, selectorIsAriaExpanded } from '../../redux/mobile-menu/mobile-menu.selectors';

class Header extends React.Component {
    updateDimensions = () => {
        if(window.innerWidth >= 992) {
            this.props.closeMobileMenu();
        }
      };


    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
      }

    render() {
        const {user, hidden, isAriaExpanded, isMobileMenuHidden, toggleMobileMenu, closeMobileMenu} = this.props;

        return (
            <header className='header'>
                <Link to='/'>
                    <Logo 
                        className='logo'
                        onClick={closeMobileMenu}
                    />
                </Link>
                <div className='options-container'>
                    <button 
                        onClick={toggleMobileMenu} 
                        aria-expanded={isAriaExpanded}
                        className={'hamburger hamburger--spin mobile-menu' + (isMobileMenuHidden ? '' :  ' is-active')}
                        type='button'
                        >
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                    <ul 
                        className={'options' + (isMobileMenuHidden ? '' : ' visible')}
                    >
                        <li className='option'><Link className='' to='/shop' 
                        onClick={closeMobileMenu}
                        >SHOP</Link></li>
                        {
                            user ?
                            <li className='option' onClick={() => auth.signOut()}>SIGN OUT</li> 
                            : 
                            <Link className='option' to='/sign'  
                            onClick={closeMobileMenu}
                            >SIGN IN</Link>
                        }
                    </ul>
                    <CartIcon />
                    {
                        hidden ? null : <CartDropdown /> 
                    }
                
                </div>
            </header>
        )
    }
}


//get data from state about user and cart basket and mobile menu
// const mapStateProps = ({user: { currentUser}, cart: {hidden}, mobileMenu: {isMobileMenuHidden, isAriaExpanded}} ) => ({
//     user: currentUser,
//     hidden: hidden,
//     isMobileMenuHidden: isMobileMenuHidden,
//     isAriaExpanded: isAriaExpanded
// });

const mapStateProps = (state) => ({
    user: selectorCurrentUser(state),
    hidden: selectorHiddenCart(state),
    isMobileMenuHidden: selectorIsMobileMenuHidden(state),
    isAriaExpanded: selectorIsAriaExpanded(state)
});

//make action
const mapDispatchToProps = (dispatch) => ({
    toggleMobileMenu: () => dispatch(toggleMobileMenu()),
    closeMobileMenu: () => dispatch(closeMobileMenu())
});

export default connect(mapStateProps, mapDispatchToProps)(Header);