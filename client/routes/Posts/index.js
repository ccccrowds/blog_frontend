import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"
import { provideHooks } from 'redial';
import { getPostsList, getTypeList } from './actions'

import UserComp from './components'

@provideHooks({
  fetch: ({ dispatch, params }) => {
    // return Promise.all([
    return dispatch(getPostsList())
      // dispatch(getTypeList())
    // ])
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
    const { postsList, typeList, getPostsList } = this.props
    return (
      <UserComp postsList={postsList}
        typeList={typeList}
        getPostsList={getPostsList}/>
    )
  }
}

