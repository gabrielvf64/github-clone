import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Navbar = ({ icone, titulo }) => {
  return (
    <nav className='navbar bg-primary'>
      <Link to='/'>
        <h1>
          <i className={icone} /> {titulo}
        </h1>
      </Link>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>Sobre</Link>
        </li>
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
  titulo: 'Github Clone',
  icone: 'fab fa-github'
}

Navbar.propTypes = {
  titulo: PropTypes.string.isRequired,
  icone: PropTypes.string.isRequired
}

export default Navbar
