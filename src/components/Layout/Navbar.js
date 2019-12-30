import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Navbar extends Component {
  static defaultProps = {
    titulo: 'Github Clone',
    icone: 'fab fa-github'
  }

  static propTypes = {
    titulo: PropTypes.string.isRequired,
    icone: PropTypes.string.isRequired
  }

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icone} /> {this.props.titulo}
        </h1>
      </nav>
    )
  }
}

export default Navbar
