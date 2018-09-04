import React, { Component, Fragment } from 'react'
import './App.css'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import SearchInput from './components/SearchInput'
import Result from './components/Result'
import Spinner from 'react-spinkit'

const baseUrl = 'https://gateway.marvel.com:443/v1/public/'
const apiKey = '&apikey=3cbc155a5db939802deb33f176cfacb4'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      result: null,
      found: null,
      loading: false
    }
  }

  fetchResults = async query => {
    try {
      this.setState({ loading: true, result: false })
      const result = await (await fetch(
        `${baseUrl}/characters?name=${query}${apiKey}`
      )).json()
      this.setState({ loading: false })

      const found = !!result.data.total

      if (found) {
        this.setState({ result, found })
      } else {
        this.setState({ result: false, found })
      }
    } catch (e) {
      console.error(e)
    }
  }

  render () {
    const { found, loading } = this.state
    if (this.state.result) {
      var { data: { results: [result] } } = this.state.result
    }

    return (
      <Fragment>
        <Grid className='grid-container' container justify='center'>
          <Grid item xs={12} sm={6}>
            <img
              className='marvel-logo'
              src='https://upload.wikimedia.org/wikipedia/commons/0/04/MarvelLogo.svg'
              alt='Marvel Logo'
            />
            <SearchInput onSubmit={this.fetchResults} />
          </Grid>
        </Grid>
        <Grid
          className='grid-container grid-container--result'
          container
          justify='center'
        >
          <Grid item xs={12} sm={4}>
            {loading &&
              <Spinner
                className='loading-spinner'
                name='ball-spin-fade-loader'
              />}
            {result &&
              found &&
              <Result
                thumbnail={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                name={result.name}
                bio={result.description}
              />}
            {!found && 
              <Typography
                className='results-copy'
                variant='subheading'
                gutterBottom
              >
                There's not result
              </Typography>
            }
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

export default App
