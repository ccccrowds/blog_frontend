import React, { PureComponent } from 'react'
import './index.scss'

export default class Loading extends PureComponent {
  render() {
    return (
      <div className="loader">
        <div className="cube"></div>
      </div>
    )
  }
}
