import { View, Text, SafeAreaView, Dimensions } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import Slider from '@react-native-community/slider'
import { stylesAudio } from './style.Audio'
import { convertTime } from '../../utils/convertTime'
import theme from '../../constants/theme'
import { Sound } from 'expo-av/build/Audio'
import { Audio, AVPlaybackStatus } from 'expo-av'
import { IData } from '../../interfaces/IDataApi'
import { Context } from '../../context'
import AsyncStorage from '@react-native-async-storage/async-storage'

type propsType = {
  playerData: IData
}
type contextType = {
  id: string,
  progress: number
}[] | []

const AudioPlayer = ({ playerData }: propsType) => {
  const [playback, setPlayback] = useState<Sound>()
  const [status, setStatus] = useState<AVPlaybackStatus>()
  const [progress, setProgress] = useState(0)

  const { width } = Dimensions.get('window')
  const { setRecent, recent } = useContext(Context)

  useEffect(() => {
    (async () => {
      if (playerData.audio) {
        const playbackObj = new Audio.Sound()

        const position = recent.find((curr) => curr.id == playerData.id) || false
        position !== false && setProgress(position.progress)

        const status = await playbackObj.loadAsync(
          { uri: playerData.audio },
          {
            progressUpdateIntervalMillis: 1000,
            positionMillis: position ? position.progress : 0
          }
        )
        setPlayback(playbackObj)
        setStatus(status)
      }
    })()
  }, [playerData])

  const updateProgressRecent = (playback: Sound) => {
    const data = () => recent.map((curr) => {
      if (curr.id === playerData.id) {
        return {
          ...curr,
          progress: playback._lastStatusUpdate === null
            ? 0
            : JSON.parse(playback._lastStatusUpdate as string).positionMillis,
        }
      }
      return curr
    }
    )
    setRecent(data())
    AsyncStorage.setItem('com.awb', JSON.stringify(data()))
  }

  useEffect(() => {
    return playback
      ? () => {
        playback.unloadAsync()
        if (recent.length < 4) {
          const verify = recent.some((curr) => curr.id == playerData.id)
          if (verify) {
            return updateProgressRecent(playback)
          }
          const data = [
            ...recent,
            {
              id: playerData.id,
              progress: playback._lastStatusUpdate === null
                ? 0
                : JSON.parse(playback._lastStatusUpdate as string).positionMillis,
              title: playerData.title
            }
          ]
          setRecent(data)
          AsyncStorage.setItem('com.awb', JSON.stringify(data))
        }
        if (recent.length === 4) {
          const verify = recent.some((curr) => curr.id == playerData.id)
          if (verify) {
            return updateProgressRecent(playback)
          }
          const data = () => {
            const ids = recent
            ids.shift()
            return [...ids, {
              id: playerData.id,
              progress: playback._lastStatusUpdate === null
                ? 0
                : JSON.parse(playback._lastStatusUpdate as string).positionMillis,
              title: playerData.title
            }]
          }
          setRecent(data())
          AsyncStorage.setItem('com.awb', JSON.stringify(data()))
        }
      }
      : undefined
  }, [playback])

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
                onValueChange={async value => {
                  await playback?.setPositionAsync(value)
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
                  status.isPlaying ? 'pausecircle' : 'playcircleo'
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