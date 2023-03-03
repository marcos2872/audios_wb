import { FlatList } from 'react-native'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import HomeCards from '../../components/HomeCards'
import Navbar from '../../components/Navbar'
import data from '../../mock/data'
import { stylesHome } from './styles.Home'

const Home = () => {
  return (
    <SafeAreaView style={stylesHome.container}>
      <ScrollView style={stylesHome.main} alwaysBounceVertical={true} >
        <View style={stylesHome.presentation}>
          <Text style={stylesHome.textPresentation}>Seja bem vindo</Text>
        </View>

        <View style={stylesHome.recent}>
          <Text style={{color: 'red'}}>recents</Text>
        </View>

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

