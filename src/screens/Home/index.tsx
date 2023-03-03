import { FlatList } from 'react-native'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import HomeCards from '../../components/HomeCards'
import data from '../../mock/data'
import { stylesHome } from './styles.Home'

const Home = () => {
  return (
    <ScrollView style={stylesHome.main} alwaysBounceVertical={true} >
      <View style={stylesHome.presentation}>
        <Text style={stylesHome.textPresentation}>Seja bem vindo</Text>
      </View>

      <View style={stylesHome.recent}>
        <Text style={{color: 'red'}}>recents</Text>
      </View>

      <FlatList
      style={stylesHome.cards}
      data={data.slice(0, 8)}
      numColumns={2}
      keyExtractor={item => item.id}
      renderItem= {({item}) => (
        <HomeCards data={item} key={item.id} />
      )}
      />

    </ScrollView>
  )
}

export default Home

