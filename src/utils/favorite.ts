import AsyncStorage from '@react-native-async-storage/async-storage'

export type favoriteType = {
  id: string
  title: string
  details: string
}

export async function setFavorite(data: favoriteType[]) {
  await AsyncStorage.removeItem('@awmb-favorites')
  await AsyncStorage.setItem('@awmb-favorites', JSON.stringify(data))  
}

export async function getFavorite() {
  const favorites = await AsyncStorage.getItem('@awmb-favorites')
  const data = JSON.parse(favorites || '[]')
  return data
}

// export async function getFavoriteById(id: string) {
//   const favorites = await AsyncStorage.getItem('@awmb-favorites')
//   const data = JSON.parse(favorites || '[]')
//   return data.some((curr: favoriteType) => curr.id === id )
// }

// export async function removeFavorite(id: string) {
//   const favorites = await AsyncStorage.getItem('@awmb-favorites')
//   const data = JSON.parse(favorites || '[]')
//   const remov = data.filter((curr: favoriteType) => curr.id !== id )
//   await AsyncStorage.setItem('@awmb-favorites', JSON.stringify(remov))
//   return false
// }