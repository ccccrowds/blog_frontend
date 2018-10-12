import React, { PureComponent } from 'react'
import { connect } from "react-redux"
import { provideHooks } from 'redial';
import { getArchiveList } from './actions'

import ArchiveComp from './components'

@provideHooks({
  fetch: ({ dispatch }) => {
    return dispatch(getArchiveList())
  }
})
@connect(
  state => state.archive
)
export default class UserContainer extends PureComponent {
  render() {
    const { archive } = this.props
    return (
      <ArchiveComp archive={archive}/>
    )
  }
}

