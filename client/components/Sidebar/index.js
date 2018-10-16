import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../../../avatar.jpg'
import './index.scss'

export default class Sidebar extends PureComponent {
  state = {
    show: false
  }
  toggleMenu = () => {
    this.setState({
      show: !this.state.show
    })
  }
  hideMenu = () => {
    this.setState({
      show: false
    })
  }
  render() {
    const { show } = this.state
    return (
      <aside className={`left-menu ${show ? 'left-menu-show' : ''}`}>
        <button className="left-menu__button" onClick={this.toggleMenu}>
          <span className="left-menu__button-bar"></span>
          <span className="left-menu__button-bar"></span>
          <span className="left-menu__button-bar"></span>
        </button>
        <div className="left-menu__logo">
          <img className="left-menu__logo-content" src={avatar}/>
        </div>
        <ul className="left-menu__list" onClick={this.hideMenu}>
          <li className="left-menu__list-item"><Link to="/">Posts</Link></li>
          <li className="left-menu__list-item"><Link to="/archives">Archives</Link></li>
          <li className="left-menu__list-item"><Link to="/tags">Tags</Link></li>
          {/* <li className="left-menu__list-item"><Link to="/">About</Link></li> */}
        </ul>
      </aside>
    )
  }
}
