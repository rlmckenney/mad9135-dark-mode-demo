import React from 'react'
import {FlatList, StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useMovies} from '../context/moviesContext'
import MovieListItem from './MovieListItem'
import {themes, spacing} from '../styles'
import {useTheme} from '../context/themeContext'

function MovieListScreen({navigation}) {
  const [movies] = useMovies()
  const {styles} = useTheme(stylesSheet)

  return (
    <SafeAreaView style={{flex: 1}} edges={['right', 'bottom', 'left']}>
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

const theme = themes.light
const stylesSheet = theme =>
  StyleSheet.create({
    container: {
      padding: spacing.base,
      backgroundColor: theme.bodyBackgroundColor
    }
  })

export default MovieListScreen
