import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"
import { provideHooks } from 'redial';
import { getPostsList } from './actions'

import UserComp from './components'

@provideHooks({
  fetch: ({ dispatch, params }) => {
    dispatch(getPostsList())
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

