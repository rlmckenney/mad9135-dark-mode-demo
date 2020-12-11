import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {colors, spacing, themes, typography} from '../styles'
import {useTheme} from '../context/themeContext'

function MovieListItem({movie, onPress}) {
  const {styles} = useTheme(styleSheet)
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.releaseDate}>
        Released in {new Date(movie.release_date).getFullYear()}
      </Text>
    </TouchableOpacity>
  )
}

const styleSheet = theme =>
  StyleSheet.create({
    card: {
      paddingVertical: spacing.small,
      borderBottomWidth: spacing.hairline,
      borderBottomColor: theme.listSeparatorColor
    },
    title: {fontSize: typography.fs4, color: theme.strongTextColor},
    releaseDate: {
      paddingTop: spacing.smallest,
      fontSize: typography.fs3,
      color: theme.subduedTextColor
    }
  })

export default MovieListItem
