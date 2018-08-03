import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"
import { provideHooks } from 'redial';
import { getPostsList } from './actions'

import UserComp from './components'

@provideHooks({
  fetch: ({ dispatch, params }) => {
    // 务必将Promise返回，保证请求结束后再进行服务端渲染
    return dispatch(getPostsList())
  }
})
@connect(state => state.posts)
export default class UserContainer extends PureComponent {
  render() {
    const { postsList } = this.props
    return (
      <UserComp postsList={postsList}/>
    )
  }
}

