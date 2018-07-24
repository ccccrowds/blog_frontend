import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import Sidebar from './components/Sidebar'
import './styles/index.scss'

export default class App extends Component {
  render() {
    const { data } = this.props
    return (
      <Fragment>
        <Sidebar />
        <div className="right-content">
          {renderRoutes(routes)}
        </div>
      </Fragment>
    )
  }
}
