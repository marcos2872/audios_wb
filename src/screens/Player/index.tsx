import { View, Text, SafeAreaView } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { stylesPlayer } from './styles.Player';
import data from '../../mock/data';
import { useEffect, useState } from 'react';
import { IData } from '../../interfaces/IDataApi';

const Player = () => {
  const { params: { id } } = useRoute() as { params: { id: string } };
  const [playerData, setPlayerData] = useState<IData>()
  
  useEffect(() => {
    const info = data.find((curr) => curr.id === id)
    setPlayerData(info)
  }, [])
  console.log(playerData)
  
  return (
    <SafeAreaView style={stylesPlayer.main}>
      <Text>Player</Text>
    </SafeAreaView>
  )
}

export default Player