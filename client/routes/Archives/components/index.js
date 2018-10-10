import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Loading from '@/common/loading'
import Timeline from '@/components/Timeline'

import './index.scss'

export default class Tags extends PureComponent {
  titleRender (article) {
    return <Link key={article._id}
    to={`/detail/${article._id}`}
    className="archive-article">
    {article.title}
    <span className="archive-article__time">({article.time})</span>
  </Link>
  }
  render() {
    const { archive } = this.props
    const { loading, data } = archive
    return (
      <div className="archives">
        {
          loading
            ? <Loading />
            : <Timeline data={data} render={this.titleRender}/>
        }
      </div>
    )
  }
}
