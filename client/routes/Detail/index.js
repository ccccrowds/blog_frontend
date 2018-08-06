import React, { PureComponent } from 'react'
import { connect } from "react-redux"
import { provideHooks } from 'redial';
import { getPostsDetail } from './actions'

import DetailComp from './components'

@provideHooks({
  fetch: ({ dispatch, params }) => {
    return dispatch(getPostsDetail(params.id))
  }
})
@connect(state => state.postsDetail)
export default class UserContainer extends PureComponent {
  render() {
    const { postsDetail } = this.props
    return (
      <DetailComp postsDetail={postsDetail}/>
    )
  }
}

