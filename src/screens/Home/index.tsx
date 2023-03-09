import { useContext } from 'react'
import { FlatList } from 'react-native'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import HomeCards from '../../components/HomeCards'
import Navbar from '../../components/Navbar'
import Recents from '../../components/Recents'
import { Context } from '../../context'
import data from '../../mock/data'
import { stylesHome } from './styles.Home'

const Home = () => {
  const { recent } = useContext(Context)
  
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
                  <Recents key={Math.random()} info={props}/>
                ))}
              </View>
          )}

        <View style={stylesHome.cards}>
          {data.slice(0, 8).map((curr) => (
            <HomeCards data={curr} key={curr.id} />
            ))}
        </View>
      </ScrollView>
      <Navbar />
    </SafeAreaView>
  )
}

export default Home
