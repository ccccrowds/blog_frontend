import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Loading from '@/common/loading'
import Timeline from '@/components/Timeline'
import { getParams } from '@/common/util'
import './index.scss'

export default class Tags extends PureComponent {
  static propTypes = {
    /** 标签列表 */
    tagList: PropTypes.object
  }
  componentWillReceiveProps = (nextProps) => {
    if (this.props.tagList.loading && !nextProps.tagList.loading) {
      const params = getParams(location.search)
      setTimeout(() => {
        params.tag && this.scrollToAnchor(params.tag)
      }, 0)
    }
  }
  scrollToAnchor = (anchorName) => {
    if (anchorName) {
      const anchorElement = document.getElementById(anchorName)
      
      if(anchorElement) {
        anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'})
      }
    }
  }
  renderArticle (articleList) {
    const { list } = articleList
    const render = article => <Link key={article._id}
      to={`/detail/${article._id}`}
      className="tags-article">
      {article.title}
    </Link>

    return <Timeline data={list} render={render}/>
  }
  render() {
    const { tagList, articleList } = this.props
    const { loading, list } = tagList
    return (
      <div className="tags">
        {
          !loading
            ? <div className="tags-list">
              { list.map(item => <label key={item._id}
                onClick={() => this.scrollToAnchor(item.name)}
                className="tags-list__item">
                {item.name}
              </label>) }
            </div>
            : <Loading />  
        }
        {
          this.renderArticle(articleList)
        }
      </div>
    )
  }
}
