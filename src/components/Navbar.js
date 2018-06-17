import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/sensitive-earth-logo.jpg'

const Navbar = () => (
    <nav className="navbar is-transparent" style={{  height: '100px' }}>
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
              <img src={logo} alt=""  style={{  height: '100px' }}/>
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/store">
            Store
        </Link>
        <Link className="navbar-item" to="/about">
            About
        </Link>
        <Link className="navbar-item" to="/blog">
            Blog
        </Link>
        <Link className="navbar-item" to="/products">
            Products
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
