import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import Loading from '@/common/loading'
import Item from './Item'

import './index.scss'

export default class Posts extends PureComponent {
  getMore = () => {
    const { postsList, getPostsList } = this.props
    const { page } = postsList
    getPostsList(page.page + 1)
  }
  render() {
    const { postsList, getPostsList } = this.props
    const { loading, list, page } = postsList
    return (
      <div className="posts">
        <ul className="posts-lists" ref="wrap">
          {
            list.map(item => <Item
              item={item} key={item._id}/>)
          }
        </ul>
        {
          loading
            ? <Loading />
            : <button className="posts__more" onClick={this.getMore}>Read More</button>
        }
      </div>
    )
  }
}
