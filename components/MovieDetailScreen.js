import React from 'react'
import {ScrollView, Text, View, StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useMovies} from '../context/moviesContext'
import {colors, spacing, typography} from '../styles'
import {useTheme} from '../context/themeContext'

function MovieDetailScreen({navigation, route}) {
  const {styles} = useTheme(styleSheet)
  const [movies] = useMovies()
  const movie = movies.find(m => m.episode_id === route.params.id)

  React.useLayoutEffect(() => navigation.setOptions({title: movie.title}), [
    navigation,
    movie
  ])

  return (
    <SafeAreaView style={styles.safeArea} edges={['right', 'bottom', 'left']}>
      <ScrollView style={styles.container}>
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
          <Text style={styles.rawResultsText}>{JSON.stringify(movie)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styleSheet = theme =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.bodyBackgroundColor
    },
    container: {padding: spacing.base},
    title: {
      color: theme.strongTextColor,
      fontSize: typography.fs4,
      fontWeight: typography.fwSemiBold,
      marginBottom: spacing.smaller
    },
    byLine: {
      color: theme.subduedTextColor,
      fontSize: typography.fs2,
      lineHeight: typography.lh2
    },
    crawl: {
      color: theme.highlightTextColor,
      fontSize: typography.fs4,
      fontStyle: 'italic',
      lineHeight: typography.lh4
    },
    rawResults: {
      borderTopColor: theme.listSeparatorColor,
      borderTopWidth: spacing.hairline,
      paddingTop: spacing.base,
      marginTop: spacing.smaller
    },
    rawResultsText: theme.bodyText
  })

export default MovieDetailScreen
