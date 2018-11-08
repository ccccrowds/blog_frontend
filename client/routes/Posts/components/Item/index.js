import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Tag from '@/components/Tag'
import { Link } from 'react-router-dom'

const gutter = 30
const basicUrl = 'https://ws1.sinaimg.cn/mw690/'
export default class PostItem extends PureComponent {
  getResultDesc(desc) {
    if (!desc) return ''

    const length = desc.length
    const max = 70

    return length > max
      ? desc.slice(0, max) + '...'
      : desc
  }
  render() {
    const { item } = this.props
    return (
      <li className="posts-lists__item" ref="item">
        <Link to={`/detail/${item._id}`} className="posts-lists__item__wrap">
          <div className="posts-lists__item__title"
            style={{
              backgroundImage: `url(${basicUrl + item.thumb})`
            }}>
            {item.title}
            <div className="posts-lists__item__time">
              {item.create_at}
            </div>
          </div>
          <div className="posts-lists__item__body">
            <p className="posts-lists__item__info">
              Tags:
              {
                item.tag.map(item => <Tag key={item._id} data={item} />)
              }
            </p>
            <p className="posts-lists__item__desc">{this.getResultDesc(item.desc)}</p>
          </div>
        </Link>
      </li>
    )
  }
}
