import AsyncStorage from '@react-native-async-storage/async-storage'
import { IRecents } from '../interfaces/IRecents'

export async function setStorage(data: IRecents[]) {
  await AsyncStorage.setItem('@awmb-recents', JSON.stringify(data))
}

export async function getStorage() {
  // await AsyncStorage.removeItem('@awmb-recents')
  const storage = await AsyncStorage.getItem('@awmb-recents')
  return storage ? JSON.parse(storage) : []
}