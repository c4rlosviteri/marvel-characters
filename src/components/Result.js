import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

function Result (props) {
  return (
    <Card>
      <CardMedia
        className='card-thumbnail'
        image={props.thumbnail}
        title={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant='headline' component='h2'>
          {props.name}
        </Typography>
        <Typography component='p'>
          {props.bio}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Result
