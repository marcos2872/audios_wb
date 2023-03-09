import { View, Text, SafeAreaView, Image, Dimensions } from 'react-native'
import { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import Slider from '@react-native-community/slider'
import { stylesAudio } from './style.Audio'
import { convertTime } from '../../utils/convertTime'
import theme from '../../constants/theme'
import { Sound } from 'expo-av/build/Audio'
import { Audio, AVPlaybackStatus } from 'expo-av'
import { IData } from '../../interfaces/IDataApi'

type propsType = {
  playerData: IData
}

const AudioPlayer = ({ playerData }: propsType) => {
  const [playback, setPlayback] = useState<Sound>()
  const [status, setStatus] = useState<AVPlaybackStatus>()
  const [progress, setProgress] = useState(0)

  const { width } = Dimensions.get('window')

  useEffect(() => {
    (async () => {
      if (playerData.url) {

        const playbackObj = new Audio.Sound()
        const status = await playbackObj.loadAsync(
          { uri: playerData.url },
          { progressUpdateIntervalMillis: 1000 }
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
      const status = await playback?.pauseAsync()
      setStatus(status)

    }
    if (status?.isLoaded && !status.isPlaying) {
      const status = await playback?.playAsync()
      setStatus(status)
      playback?.setOnPlaybackStatusUpdate((sta: any) => {
        setProgress(sta.positionMillis)

      })
    }
  }

  return (
    <SafeAreaView style={stylesAudio.main}>
      {status?.isLoaded ? (
        <>
          <View style={stylesAudio.menu}>
            <Text style={stylesAudio.title}>
              {playerData.title}
            </Text>
            <View>
              <View style={stylesAudio.count}>
                <Text style={stylesAudio.text}>{convertTime(progress)}</Text>
                <Text style={stylesAudio.text}>{convertTime(Number(status.durationMillis))}</Text>
              </View>
              <Slider
                style={{ width: width, height: 40 }}
                minimumValue={0}
                maximumValue={status.durationMillis}
                value={progress}
                minimumTrackTintColor={theme.colors.select}
                maximumTrackTintColor={theme.colors.whiteOpacity}
                onValueChange={value => {
                  playback?.setPositionAsync(value)
                  setProgress(value)
                }}
                onSlidingComplete={async value => {
                  await playback?.setPositionAsync(0)
                  setProgress(0)
                }}
              />
            </View>
            <View style={stylesAudio.buttons}>
              <AntDesign
                name={
                  status?.isLoaded && status.isPlaying ? 'pausecircle' : 'playcircleo'
                }
                color={'white'}
                size={60}
                onPress={onAudioPress}
              />
            </View>
          </View>
        </>
      )
    : (
      <Text style={stylesAudio.title}>Carregando player...</Text>
    )}
    </SafeAreaView>
  )
}

export default AudioPlayer