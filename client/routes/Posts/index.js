import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"
import { provideHooks } from 'redial';
import { getPostsList } from './actions'

import UserComp from './components'

@provideHooks({
  fetch: ({ dispatch, params }) => {
    return dispatch(getPostsList())
  }
})
@connect(
  state => state.posts,
  dispatch => bindActionCreators({
    getPostsList
  }, dispatch)
)
export default class UserContainer extends PureComponent {
  render() {
    const { postsList, getPostsList } = this.props
    return (
      <UserComp postsList={postsList}
        getPostsList={getPostsList}/>
    )
  }
}

