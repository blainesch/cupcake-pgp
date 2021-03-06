import React from 'react'
import PropTypes from 'prop-types'

class Friend extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    names: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
  }

  handleDelete = () => {
    this.props.handleDelete(this.props.id)
  }

  render () {
    const { names } = this.props

    return (
      <div className="friend">
        <div className="names">
          { names.map((name) => {
            return <div key={name} className="name">{name}</div>
          }) }
        </div>
        <div className="actions">
          <a onClick={this.handleDelete} className="delete">Delete</a>
        </div>
      </div>
    )
  }
}

export default Friend
