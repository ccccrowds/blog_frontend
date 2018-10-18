import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './index.scss'

export default class Tag extends Component {
  static propTypes = {
    data: PropTypes.object
  }

  render() {
    const { data } = this.props
    const { name = '', _id = ''} = data

    if (!_id) return ''

    return (
      <Link className="tag" to={`/tags?tag=${name}`}>
        {name}
      </Link>
    )
  }
}
