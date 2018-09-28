import React, { PureComponent } from 'react'
import Loading from '@/common/loading'
import './index.scss'

export default class Detail extends PureComponent {
  renderTitle (item) {
    return <div className="posts-detail__title">
      <h2 className="posts-detail__title-content">{item.title}</h2>
      <p className="posts-detail__title-time">POSTED AT: {item.create_at}</p>
    </div>
  }
  render() {
    const { postsDetail } = this.props
    const { loading, item } = postsDetail
    const body = () => ({ __html: item.content })
    return (
      loading
        ? <Loading />
        : item
          ? <div className="posts-detail">
            <div className="posts-detail__image">
              <img src={item.thumb}/>
            </div>
            {this.renderTitle(item)}
            <div className="posts-detail__content" dangerouslySetInnerHTML={body()}></div>
          </div>
          : '暂无数据'
    )
  }
}
