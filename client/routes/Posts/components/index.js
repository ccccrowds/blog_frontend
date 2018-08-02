import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Posts extends PureComponent {
  static propTypes = {

  }

  render() {
    const { postsList } = this.props
    const { loading, list } = postsList
    return (
      <div>
        {
          loading
            ? 'loading...'
            : <ul>
              {
                list.map(item => <li>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <p>{item.created_time}</p>
                </li>)
              }
            </ul>
        }
      </div>
    )
  }
}
