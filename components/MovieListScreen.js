import React from 'react'
import {FlatList, StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useMovies} from '../context/moviesContext'
import MovieListItem from './MovieListItem'
import {spacing} from '../styles'
import {useTheme} from '../context/themeContext'

function MovieListScreen({navigation}) {
  const [movies] = useMovies()
  const {styles} = useTheme(styleSheet)

  return (
    <SafeAreaView style={styles.safeArea} edges={['right', 'bottom', 'left']}>
      <FlatList
        style={styles.container}
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

const styleSheet = theme =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.bodyBackgroundColor
    },
    container: {
      padding: spacing.base,
      backgroundColor: theme.bodyBackgroundColor
    }
  })

export default MovieListScreen
