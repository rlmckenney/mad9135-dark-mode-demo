import React from 'react'
import {FlatList} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useMovies} from '../context/moviesContext'
import MovieListItem from './MovieListItem'

function MovieListScreen({navigation}) {
  const [movies] = useMovies()

  return (
    <SafeAreaView style={{flex: 1}} edges={['right', 'bottom', 'left']}>
      <FlatList
        style={{padding: 16}}
        data={movies}
        renderItem={({item}) => (
          <MovieListItem
            movie={item}
            onPress={() =>
              navigation.navigate('MovieDetails', {id: item.episode_id})
            }
          />
        )}
        keyExtractor={item => `${item.episode_id}`}
      />
    </SafeAreaView>
  )
}

export default MovieListScreen
