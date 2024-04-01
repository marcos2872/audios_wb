import React from 'react'
import { SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { stylesPlayer } from './styles.Player'
import { useEffect, useState } from 'react'
import { IData } from '../../interfaces/IDataApi'
import { AntDesign } from '@expo/vector-icons'
import { readJson } from '../../utils/readJson'
import TrackPlayback from '../../components/TrackPlayer'
import { sermoesData } from '../../data/sermoes'

const Player = () => {
  const { params: { id } } = useRoute() as { params: { id: string } }
  const [playerData, setPlayerData] = useState<IData>({} as IData)

  const navigation = useNavigation()

  useEffect(() => {
    const info = sermoesData.find((curr: IData) => curr.id === id)
    
    setPlayerData(info || {} as IData)
  }, [])

  return (
    <SafeAreaView style={stylesPlayer.main}>
      <TouchableOpacity
      style={stylesPlayer.header}
      onPress={() => {
        navigation.goBack()
      }}
      >
        <AntDesign
          name='left'
          size={25}
          style={stylesPlayer.arrow}
        />
      </TouchableOpacity>
      <Image
        source={require('../../../assets/images/739567.jpg')}
        style={stylesPlayer.image}
      />
      {playerData.audio && (
        <TrackPlayback playerData={playerData} />
      )}
    </SafeAreaView>
  )
}
export default Player
