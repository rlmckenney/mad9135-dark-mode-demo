import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

function MovieListItem({movie, onPress}) {
  return (
    <TouchableOpacity style={{paddingVertical: 8}} onPress={onPress}>
      <Text style={{fontSize: 18, color: 'hsl(220, 13%, 6%)'}}>
        {movie.title}
      </Text>
      <Text style={{paddingTop: 8, color: 'hsl(275, 20%, 25%)'}}>
        Released in {new Date(movie.release_date).getFullYear()}
      </Text>
    </TouchableOpacity>
  )
}

export default MovieListItem
