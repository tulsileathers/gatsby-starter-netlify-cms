import React from 'react'
import ClassNames from 'classnames'

import { FaInstagram, FaEtsy, FaFacebook, FaShoppingBasket} from 'react-icons/fa';
import logo from '../img/logo.png'
import { Link } from 'gatsby'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.toggleMenuActive = this.toggleMenuActive.bind(this);
        this.state = {
            menuActive: false,
        }
    }

    toggleMenuActive() {
        const currentState = this.state.menuActive;
        this.setState({ menuActive: !currentState });
    };

    render() {
        var menuClass = ClassNames({
            'navbar-menu': true,
            'is-active': this.state.menuActive
        });
        var burgerClass = ClassNames({
            'navbar-burger': true,
            'is-active': this.state.menuActive
        });

        return (
            <nav className="navbar is-transparent" style={{  height: '200px' }}>
            <div className="navbar-brand">
                <Link to="/" className="navbar-item" id="navbar-logo">
                    {/* <figure className="image"> */}
                    {/*     <img src={logo} alt=""  style={{height: '100px', width: '100px' }}/> */}
                    {/* </figure> */}
                  Glasswater Angling
                </Link>
                <div className={burgerClass} onClick={this.toggleMenuActive}aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>
            <div className={menuClass}>
            <div className="navbar-start">
                <Link className="navbar-item" to="/store">
                    Store
                </Link>
                <Link className="navbar-item" to="/about">
                    Our Story
                </Link>
                <Link className="navbar-item" to="/blog">
                            Blog
                </Link>
                <Link className="navbar-item" to="/connect">
                    Connect
                </Link>
                <a
                  className="navbar-item snipcart-checkout"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="icon">
                      <FaShoppingBasket/>
                    </span>
                </a>
            </div>
            </div>
            <div className="navbar-end">
            <a
            className="navbar-item"
            href="https://www.instagram.com/theangleking/"
            target="_blank"
            rel="noopener noreferrer"
            >
                <span className="icon">
                    <FaInstagram/>
                </span>
                </a>
            </div>
        </nav>
            )
    }
}

export default Navbar
