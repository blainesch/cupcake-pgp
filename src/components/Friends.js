import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'redux-zero/react'

import Friend from './Friend'
import actions from '../actions'

const mapToProps = ({ keys, removeKey }) => ({ keys, removeKey })

class Friends extends React.Component {
  static propTypes = {
    removeKey: PropTypes.func.isRequired,
    keys: PropTypes.array.isRequired,
  }

  handleDelete = (id) => {
    this.props.removeKey(id)
  }

  render () {
    const { keys } = this.props

    return (
      <div className="content">
        <ul className="friends">
          { keys.map(({ id, names }, index) => (
            <li key={id + index}>
              <Friend
                id={id}
                names={names}
                handleDelete={this.handleDelete} />
            </li>
          )) }
        </ul>
        <span className="addFriend">
          <Link to="/addFriend">Add Friend</Link>
        </span>
      </div>
    )
  }
}

export default connect(mapToProps, actions)(Friends)
