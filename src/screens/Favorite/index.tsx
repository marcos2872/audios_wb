import { useEffect, useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Navbar from '../../components/Navbar'
import { favoriteType, getFavorite } from '../../utils/favorite'
import { stylesFavorite } from './styles.Favorite'

const Favorite = () => {
  const [favorites, setFavorites] = useState<favoriteType[] | []>([])
  useEffect(() => {
    (async () => {
      const data = await getFavorite()
      setFavorites(data)
    })()
  }, [])
  
  return (
    <SafeAreaView style={stylesFavorite.main}>
      <Navbar />
    </SafeAreaView>
  )
}

export default Favorite