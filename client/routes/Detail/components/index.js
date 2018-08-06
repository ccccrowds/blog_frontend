import React, { PureComponent } from 'react'
import Loading from '@/common/loading'
// import './index.scss'

export default class Detail extends PureComponent {
  render() {
    const { postsDetail } = this.props
    const { loading, item } = postsDetail
    const body = () => ({ __html: item.body })
    return (
      loading
        ? <Loading />
        : item
          ? <div className="posts-detail">
            <h2 className="posts-title">{item.title}</h2>
            <div className="posts-content" dangerouslySetInnerHTML={body()}></div>
          </div>
          : '暂无数据'
    )
  }
}
