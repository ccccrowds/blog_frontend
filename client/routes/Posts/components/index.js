import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Loading from '@/common/loading'
import { Link } from 'react-router-dom'
import './index.scss'

const color = () => {
  return [
    'rgb(218,233,240)',
    'rgb(225,222,222)',
    'rgb(238,238,238)',
  ][parseInt(Math.random() * 3)]
}
const show = () => Math.random() < 0.7 ? 'show' : ''
const randomString = (str, length = 6) => {
  return str.repeat(parseInt(Math.random() * length) + 1)
}

export default class Posts extends PureComponent {
  getResultColumns() {

  }
  render() {
    const { postsList } = this.props
    const { loading, list } = postsList
    return (
      loading
        ? <Loading />
        : <div className="posts">
          <ul className="posts-lists">
            {
              list.map(item => <li className="posts-lists__item">
                <Link to={`/detail/${item.id}`} className="posts-lists__item__wrap">
                  <div className={`posts-lists__item__title ${show()}`}
                    style={{
                      backgroundColor: color()
                    }}>{randomString(item.title)}</div>
                  <div className="posts-lists__item__body">
                    <p className="posts-lists__item__info">{item.created_time}</p>
                    <p className="posts-lists__item__desc">{randomString('描述描述描述啊啊啊')}</p>
                  </div>
                </Link>
              </li>)
            }
          </ul>
        </div>
    )
  }
}
