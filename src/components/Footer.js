import React from 'react'
import ClassNames from 'classnames'

import { FaInstagram, FaEtsy, FaFacebook, FaHeart } from 'react-icons/fa';
import logo from '../img/logo.png'
import { Link } from 'gatsby'

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <div className="content has-text-centered">
                    <Link to="/disclaimer" className="is-pulled-left">Medical Disclaimer</Link>                
                  <Link to="https://tulsileathers.net" className="is-pulled-right">Crafted with <FaHeart/> by Tulsi</Link>                
                </div>
            </footer>
            )
    }
}

export default Footer
