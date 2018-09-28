import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import Loading from '@/common/loading'
import Tag from '@/components/Tag'
import { Link } from 'react-router-dom'
import './index.scss'

const color = () => {
  return [
    'rgb(225,222,222)',
  ][parseInt(Math.random() * 1)]
}

export default class Posts extends PureComponent {
  getResultColumns() {

  }
  renderPostItem (item) {
    return <Fragment>
      <div className="posts-lists__item__title"
      // style={{
      //   backgroundColor: color()
      // }}>
      >
        {item.title}
        <div className="posts-lists__item__time">
          {item.create_at}
        </div>
      </div>
      <div className="posts-lists__item__body">
        <p className="posts-lists__item__info">
          Tags:
          {
            item.tag.map(item => <Tag key={item._id} data={item}/>)
          }
        </p>
        <p className="posts-lists__item__desc">{item.desc}</p>
      </div>
    </Fragment>
  }
  render() {
    const { postsList } = this.props
    const { loading, list, page } = postsList
    return (
      loading
        ? <Loading />
        : <div className="posts">
          <ul className="posts-lists">
            {
              list.map(item => <li className="posts-lists__item" key={item._id}>
                <Link to={`/detail/${item._id}`} className="posts-lists__item__wrap">
                  {this.renderPostItem(item)}
                </Link>
              </li>)
            }
          </ul>
        </div>
    )
  }
}
