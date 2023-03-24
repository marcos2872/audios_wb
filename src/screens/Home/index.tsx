import { useContext, useEffect } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import HomeCards from '../../components/HomeCards'
import Navbar from '../../components/Navbar'
import Recents from '../../components/Recents'
import { Context } from '../../context'
import { IData } from '../../interfaces/IDataApi'
import { readJson } from '../../utils/readJson'
import { stylesHome } from './styles.Home'
import { getStorage, setStorage } from '../../utils/storage'


const Home = () => {
  const { recent, setRecent } = useContext(Context)
  const data = readJson()

  useEffect(() => {
    (async () => {
        const storage = await getStorage()
        if (recent.length === 0 && storage.length !== 0) {
          return setRecent(storage)
        }
        await setStorage(recent)
    })()
  }, [recent])
  
  return (
    <SafeAreaView style={stylesHome.container}>
      <ScrollView style={stylesHome.main} alwaysBounceVertical={true} >
        <View style={stylesHome.presentation}>
          <Text style={stylesHome.textPresentation}>Seja bem vindo</Text>
        </View>
        {
          recent.length > 0 && (
            <View style={stylesHome.recent}>
              {recent.map((props) => (
                <Recents key={Math.random()} info={props} />
              ))}
            </View>
          )}
        <View style={stylesHome.cards}>
          {data.slice(0, 8).map((curr: IData) => (
            <HomeCards data={curr} key={curr.id} />
          ))}
        </View>
      </ScrollView>
      <Navbar />
    </SafeAreaView>
  )
}

export default Home
