import React, { PureComponent, Fragment } from 'react'
import Loading from '@/common/loading'
// import Indexes from './Indexes'
import './index.scss'
import 'highlight.js/styles/vs2015.css'
const basicUrl = 'https://ws1.sinaimg.cn/large/'
export default class Detail extends PureComponent {
  renderTitle (item) {
    return <Fragment>
      <div className="posts-detail__image">
        <img src={basicUrl + item.thumb}/>
      </div>
      <div className="posts-detail__title">
        <h2 className="posts-detail__title-content">{item.title}</h2>
        <p className="posts-detail__title-time">POSTED AT: {item.create_at}</p>
      </div>
    </Fragment>
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
            {this.renderTitle(item)}
            <div className="posts-detail__content"
              dangerouslySetInnerHTML={body()}>
            </div>
            {/* <Indexes /> */}
          </div>
          : '暂无数据'
    )
  }
}
