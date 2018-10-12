import React, { PureComponent } from 'react'
import './index.scss'

const titleNames = ['H2', 'H3', 'H4', 'H5', 'H6']

export default class index extends PureComponent {
  state = {
    titles: []
  }

  componentDidMount = () => {
    const wrap = document.querySelector('.posts-detail__content')
    const titles = Array.from(wrap.childNodes)
      .filter(item => {
        return titleNames.includes(item.nodeName)
      })
      .map(item => ({
        level: item.nodeName.slice(1),
        name: item.textContent
      }))
    this.setState({
      titles
    })
  }
  

  render() {
    const { titles } = this.state
    return (
      <ul className="indexes-list">
        {
          titles.map(title => {
            return <li className={`indexes-list__title indexes-list__title-${title.level}`}>
              {title.name}
            </li>
          })
        }
      </ul>
    )
  }
}
