import React from 'react'
import {ScrollView, Text, View, StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useMovies} from '../context/moviesContext'

function MovieDetailScreen({navigation, route}) {
  const [movies] = useMovies()
  const movie = movies.find(m => m.episode_id === route.params.id)

  React.useLayoutEffect(
    () => navigation.setOptions({title: movie.title}), 
    [navigation, movie]
  )

  return (
    <SafeAreaView style={{flex: 1}} edges={['right', 'bottom', 'left']}>
      <ScrollView style={{padding: 16}}>
        <Text style={styles.title}>Star Wars: {movie.title}</Text>
        <Text style={styles.byLine}>
          Originally released on {movie.release_date}
        </Text>
        <Text style={styles.byLine}>Directed by {movie.director}</Text>
        <Text style={styles.byLine}>Produced by {movie.producer}</Text>

        <View style={{marginVertical: 24}}>
          <Text style={styles.crawl}>{movie.opening_crawl}</Text>
        </View>

        <View
          style={{
            borderTopColor: 'indigo',
            borderTopWidth: 1,
            borderStyle: 'solid',
            paddingTop: 16,
            marginTop: 16
          }}
        >
          <Text>{JSON.stringify(movie)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {fontSize: 18, fontWeight: '600', marginBottom: 8},
  byLine: {color: 'hsl(275, 20%, 25%)'},
  crawl: {fontStyle: 'italic', fontSize: 18, color: 'hsl(275, 100%, 15%)'}
})

export default MovieDetailScreen
