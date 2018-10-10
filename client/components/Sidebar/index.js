import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import avatar from '../../../avatar.jpg'
import './index.scss'

export default class Sidebar extends PureComponent {
  static propTypes = {

  }

  render() {
    return (
      <aside className="left-menu">
        <div className="left-menu__logo">
          <img className="left-menu__logo-content" src={avatar} alt=""/>
        </div>
        <ul className="left-menu__list">
          <li className="left-menu__list-item"><Link to="/">Posts</Link></li>
          <li className="left-menu__list-item"><Link to="/archives">Archives</Link></li>
          <li className="left-menu__list-item"><Link to="/tags">Tags</Link></li>
          <li className="left-menu__list-item"><Link to="/">About</Link></li>
        </ul>
      </aside>
    )
  }
}
