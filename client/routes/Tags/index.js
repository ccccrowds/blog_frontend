import React, { PureComponent } from 'react'
import { connect } from "react-redux"
import { provideHooks } from 'redial';
import { getTagList, getArticleGroupByTag } from './actions'

import TagsComp from './components'

@provideHooks({
  fetch: ({ dispatch }) => {
    return Promise.all([
      dispatch(getArticleGroupByTag()),
      dispatch(getTagList())
    ])
  }
})
@connect(
  state => state.tags
)
export default class UserContainer extends PureComponent {
  render() {
    const { tagList, articleList } = this.props
    return (
      <TagsComp tagList={tagList}
        articleList={articleList}/>
    )
  }
}

