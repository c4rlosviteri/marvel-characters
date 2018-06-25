import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

class SearchInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.value)
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ value })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          onChange={this.handleChange}
          label='Search Marvel characters'
          margin='normal'
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </form>
    )
  }
}

export default SearchInput
