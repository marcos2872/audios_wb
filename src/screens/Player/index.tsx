import { View, Text, SafeAreaView, Image, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';;
import { stylesPlayer } from './styles.Player';
import { useEffect, useState } from 'react';
import { IData } from '../../interfaces/IDataApi';
import { AntDesign } from '@expo/vector-icons'
import AudioPlayer from '../../components/Audio';
import { readJson } from '../../utils/readJson';

const prevData = {
  id: '',
  title: '',
  datails: '',
  audio: '',
  pdf: '',
}

const Player = () => {
  const { params: { id } } = useRoute() as { params: { id: string } };
  const [playerData, setPlayerData] = useState<IData>(prevData)

  const navigation = useNavigation()
  const data = readJson()

  useEffect(() => {
    const info = data.find((curr: IData) => curr.id === id)
    setPlayerData(info || prevData)
  }, [])

  return (
    <SafeAreaView style={stylesPlayer.main}>
      <View style={stylesPlayer.header}>
        <AntDesign
          name='left'
          size={25}
          style={stylesPlayer.arrow}
          onPress={() => {
            navigation.goBack()
          }}
        />
      </View>
      <Image
        source={require('../../mock/cover/cover.png')}
        style={stylesPlayer.image}
      />
      <AudioPlayer playerData={playerData} />
    </SafeAreaView>
  )
}
export default Player
