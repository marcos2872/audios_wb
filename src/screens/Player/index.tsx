import { View, Text, SafeAreaView, Image, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';;
import { stylesPlayer } from './styles.Player';
import data from '../../mock/data';
import { useContext, useEffect, useState } from 'react';
import { IData } from '../../interfaces/IDataApi';
import { AntDesign } from '@expo/vector-icons'
import AudioPlayer from '../../components/Audio';
import { Context } from '../../context';

const prevData = {
  id: '',
  title: '',
  year: '',
  local: '',
  duration: '',
  url: '',
  cover: ''
}

const Player = () => {
  const { params: { id } } = useRoute() as { params: { id: string } };
  const [playerData, setPlayerData] = useState<IData>(prevData)

  const navigation = useNavigation()
  const { setRecent, recent } = useContext(Context)

  useEffect(() => {
    const info = data.find((curr) => curr.id === id)
    setPlayerData(info || prevData)

    if (recent.length < 4) {
      setRecent((prev: string[] | []) => [...prev, id])
    }

    if (recent.length === 4) {
      setRecent((prev: string[]) => {
        const ids = prev
        ids.shift()
        return [...ids, id]
      })
    }
  }, [])

  console.log(recent);
  

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
      {
        playerData.cover && ((
          <Image
            source={{ uri: playerData.cover }}
            style={stylesPlayer.image}
          />
        ))
      }
      <AudioPlayer playerData={playerData} />
    </SafeAreaView>
  )
}
export default Player
