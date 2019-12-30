import React from 'react'
import PropTypes from 'prop-types'


const Navbar = ({ icone, titulo }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icone} /> {titulo}
      </h1>
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
