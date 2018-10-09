import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import Loading from '@/common/loading'

import './index.scss'

export default class Tags extends PureComponent {
  static propTypes = {
    /** 标签列表 */
    tagList: PropTypes.object
  }
  renderArticle (articleList) {
    const { list } = articleList
    return <div className="tags-article">
      {
        list.map(tag => {
          return <div key={tag._id} className="tags-article__item">
            <h3 className="tags-article__item__title">{tag._id}</h3>
            <div>
              {
                tag.list.map(article => <div key={article._id}
                  className="tags-article__item__article">
                  {article.title}
                </div>)
              }
            </div>
          </div>
        })
      }
    </div>
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
