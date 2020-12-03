import React from 'react'
import {ScrollView, Text, View, StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useMovies} from '../context/moviesContext'
import {colors, spacing, typography} from '../styles'

function MovieDetailScreen({navigation, route}) {
  const [movies] = useMovies()
  const movie = movies.find(m => m.episode_id === route.params.id)

  React.useLayoutEffect(() => navigation.setOptions({title: movie.title}), [
    navigation,
    movie
  ])

  return (
    <SafeAreaView style={{flex: 1}} edges={['right', 'bottom', 'left']}>
      <ScrollView style={{padding: spacing.base}}>
        <Text style={styles.title}>Star Wars: {movie.title}</Text>
        <Text style={styles.byLine}>
          Originally released on {movie.release_date}
        </Text>
        <Text style={styles.byLine}>Directed by {movie.director}</Text>
        <Text style={styles.byLine}>Produced by {movie.producer}</Text>

        <View style={{marginVertical: spacing.larger}}>
          <Text style={styles.crawl}>{movie.opening_crawl}</Text>
        </View>

        <View style={styles.rawResults}>
          <Text style={typography.bodyText}>{JSON.stringify(movie)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: typography.fs4,
    fontWeight: typography.fwSemiBold,
    marginBottom: spacing.smaller
  },
  byLine: {
    color: colors.gray600,
    fontSize: typography.fs2,
    lineHeight: typography.lh2
  },
  crawl: {
    color: colors.indigo900,
    fontSize: typography.fs4,
    fontStyle: 'italic',
    lineHeight: typography.lh4
  },
  rawResults: {
    borderTopColor: colors.indigo200,
    borderTopWidth: spacing.hairline,
    paddingTop: spacing.base,
    marginTop: spacing.smaller
  }
})

export default MovieDetailScreen
