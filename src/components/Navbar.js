import React from 'react'
import Link from 'gatsby-link'


const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            MYSTORE-E
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
      </div>
    </div>
  </nav>
)

export default Navbar
