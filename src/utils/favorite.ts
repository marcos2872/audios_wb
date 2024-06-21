import AsyncStorage from '@react-native-async-storage/async-storage'

export type favoriteType = {
  id: string
  title: string
  details: string
}

export async function getFavorite(id?:string): Promise<favoriteType[]> {
  const favorites = await AsyncStorage.getItem('@awmb-favorites')
  const data = JSON.parse(favorites || '[]') as favoriteType[]

  if (id) {
    return data.filter(item => item.id === id)
  }
  return data
}

export async function setFavorite(data: favoriteType): Promise<boolean> {
  const favorites = await getFavorite()
  const isFavorite = favorites.some(f => f.id === data.id)
  if (isFavorite) {
    const newFavorites = favorites.filter(f => f.id !== data.id)
    await AsyncStorage.setItem('@awmb-favorites', JSON.stringify(newFavorites))
    return false
  } else {
    await AsyncStorage.setItem('@awmb-favorites', JSON.stringify([...favorites, data]))
    return true
  }
  // await AsyncStorage.removeItem('@awmb-favorites')
}