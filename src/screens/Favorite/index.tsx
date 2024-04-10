import React, { useContext, useEffect, useState } from 'react'
import { Text, SafeAreaView, ScrollView } from 'react-native'
import { stylesFavorite } from './styles.Favorite'
import { useNavigation } from '@react-navigation/native'
import { Context } from '../../context'

const Favorite = () => {
  const { navigate } = useNavigation()as {navigate: (para: string, { }) => void}
  const { favorites, setFavorites } = useContext(Context)

  return (
    <SafeAreaView style={stylesFavorite.main}>
      <Text style={stylesFavorite.title}>Favoritos</Text>
      <ScrollView style={stylesFavorite.scroll}>
        {/* {favorites.map((curr)=> (
          // <HomeCards data={curr}/>
        ))} */}
        {!favorites.length &&
        <Text style={stylesFavorite.text}>
          Nenhum Favorito
          </Text>}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Favorite