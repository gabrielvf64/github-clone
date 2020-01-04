import React, { Component, Fragment } from 'react'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Voltar
        </Link>
        Disponível: {' '}
        {hireable ? <i className="fas fa-check text-success" /> :
          <i className="fas fa-times-circle text-danger" />}
        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url} className="round-img" alt="" style={{ width: '150px' }} />
            <h1>{name}</h1>
            <p>Localização: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )
            }
            <a href={html_url} className='btn btn-dark my-1'>
              Perfil no Github
            </a>
            <ul>
              <li>
                {login && <Fragment>
                  <strong>Nome de usuário: </strong> {login}
                </Fragment>}
              </li>
              <li>
                {company && <Fragment>
                  <strong>Empresa: </strong> {company}
                </Fragment>}
              </li>
              <li>
                {blog && <Fragment>
                  <strong>Site pessoal: </strong> {blog}
                </Fragment>}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Seguidores: {followers}</div>
          <div className='badge badge-success'>Seguindo: {following}</div>
          <div className='badge badge-light'>Repositórios públicos: {public_repos}</div>
          <div className='badge badge-dark'>Gists públicos: {public_gists}</div>
        </div>
      </Fragment>
    )
  }
}

export default User
