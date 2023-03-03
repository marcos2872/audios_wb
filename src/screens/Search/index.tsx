import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { stylesSearch } from './styles.Search'
import Navbar from '../../components/Navbar'

const Search = () => {
  return (
    <SafeAreaView style={stylesSearch.main} >
      <Text style={stylesSearch.text}>Search</Text>
      <Navbar />
    </SafeAreaView>
  )
}

export default Search