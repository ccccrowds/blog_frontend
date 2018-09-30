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
  renderTypes (typeList) {
    const { list } = typeList

    return <div className="posts-types__list">
      <div className="posts-types__list__title">按分类筛选：</div>
      {list.map(item => <label key={item._id}
        className="posts-types__list__item">
        {item.name}
      </label>)}
    </div>
  }
  render() {
    const { postsList, typeList } = this.props
    const { loading, list } = postsList
    return (
      <div className="posts">
        <div className="posts-lists__wrap">
          {this.renderTypes(typeList)}
          <ul className="posts-lists">
            {
              list.map(item => <Item
                item={item} key={item._id}/>)
            }
          </ul>
        </div>
        {
          loading
            ? <Loading />
            : <button className="posts__more" onClick={this.getMore}>Read More</button>
        }
      </div>
    )
  }
}
