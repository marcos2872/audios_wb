import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { stylesSearch } from './styles.Search'

const Search = () => {
  return (
    <SafeAreaView style={stylesSearch.main} >
      <Text style={stylesSearch.text}>Search</Text>
    </SafeAreaView>
  )
}

export default Search