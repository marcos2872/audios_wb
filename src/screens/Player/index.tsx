import { View, Text, SafeAreaView, TouchableNativeFeedback } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { stylesPlayer } from './styles.Player';
import data from '../../mock/data';
import { useEffect, useState } from 'react';
import { IData } from '../../interfaces/IDataApi';
import { Audio, AVPlaybackStatus } from 'expo-av'
import { Sound } from 'expo-av/build/Audio';

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
  const [playback, setPlayback] = useState<Sound>()
  const [status, setStatus] = useState<AVPlaybackStatus>()
  
  useEffect(() => {
    const info = data.find((curr) => curr.id === id)
    setPlayerData(info || prevData)
  }, [])
  
  useEffect(() => {
    (async() => {
      if (playerData.url) {

        const playbackObj = new Audio.Sound()
        const status = await playbackObj.loadAsync(
          {uri: playerData.url},
          )
          setPlayback(playbackObj)
          setStatus(status)
        }
    })()
  }, [playerData])

  useEffect(() => {
    return playback
      ? () => {
          playback.unloadAsync();
        }
      : undefined;
  }, [playback]);

  const onAudioPress = async () => {
      if (status?.isLoaded && status.isPlaying) {
        const status = await  playback?.pauseAsync()
        setStatus(status)
      }
      if (status?.isLoaded && !status.isPlaying) {
        const status = await playback?.playAsync()
        setStatus(status)
      }
    }
  

  return (
    <SafeAreaView style={stylesPlayer.main}>
      <TouchableNativeFeedback
      onPress={onAudioPress}
      >
      <Text>Player</Text>
      </TouchableNativeFeedback>
    </SafeAreaView>
  )
}

export default Player