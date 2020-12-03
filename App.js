import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {MoviesProvider} from './context/moviesContext'
import MovieListScreen from './components/MovieListScreen'
import MovieDetailsScreen from './components/MovieDetailScreen'
import {StatusBar} from 'react-native'
import {colors} from './styles'

const Stack = createStackNavigator()

function App() {
  return (
    <SafeAreaProvider>
      <MoviesProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: colors.headerBackground},
              headerTintColor: colors.white
            }}
          >
            <Stack.Screen
              name="MovieList"
              component={MovieListScreen}
              options={{
                title: 'Movie List'
              }}
            />
            <Stack.Screen
              name="MovieDetails"
              component={MovieDetailsScreen}
              options={{title: 'Movie Details'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar barStyle="light-content" />
      </MoviesProvider>
    </SafeAreaProvider>
  )
}

export default App
