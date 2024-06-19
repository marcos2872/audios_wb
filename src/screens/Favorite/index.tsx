import React, { useContext, useState } from 'react'
import { Text, SafeAreaView, ScrollView, FlatList, View } from 'react-native'
import { stylesFavorite } from './styles.Favorite'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { favoriteType, getFavorite } from '../../utils/favorite'
import Card from '../../components/Card'
import Separate from '../../components/Separate'

const Favorite = () => {
  const [ favorites, setFavorites ] = useState<favoriteType[]>([])

  useFocusEffect(() => {
    (async () => {
      const fav = await getFavorite()
      setFavorites(fav)
      
    })()
  })

  return (
    <SafeAreaView style={stylesFavorite.main}>
      <Text style={stylesFavorite.title}>Favoritos</Text>
      {!favorites.length ? (
        <View style={stylesFavorite.nothingFound}>
          <Text style={stylesFavorite.text}>Nada Encontrado</Text>
        </View>
      ) : null}

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card data={item} />}
        ItemSeparatorComponent={() => <Separate />}
      />
    </SafeAreaView>
  )
}

export default Favorite