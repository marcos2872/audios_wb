import { useContext, useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import Navbar from '../../components/Navbar'
import { favoriteType, getFavorite } from '../../utils/favorite'
import { stylesFavorite } from './styles.Favorite'
import theme from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'
import { Context } from '../../context'

const Favorite = () => {
  const { navigate } = useNavigation()as {navigate: (para: string, { }) => void}
  const { favorites, setFavorites } = useContext(Context)

  return (
    <SafeAreaView style={stylesFavorite.main}>
      <Text style={stylesFavorite.title}>Favoritos</Text>
      <ScrollView style={stylesFavorite.scroll}>
        {favorites.map((curr)=> (
          <TouchableOpacity style={stylesFavorite.card} key={(curr.id)} onPress={
            () => {navigate('player', { id: curr.id })}
          }>
            <Image source={require('../../assets/cover.png')} style={stylesFavorite.image} />
            <Text style={stylesFavorite.text}>
              {curr.title.slice(0, 40)}
            </Text>
          </TouchableOpacity>
        ))}
        {!favorites.length &&
        <Text style={stylesFavorite.text}>
          Nenhum Favorito
          </Text>}
      </ScrollView>
      <Navbar />
    </SafeAreaView>
  )
}

export default Favorite