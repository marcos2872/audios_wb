import { View, Text, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
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
  const [speed, setSpeed] = useState(1.0)
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
    setRecent((prev: contextType) => prev.map((curr) => {
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
    ))
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
          setRecent((prev: contextType) =>
            [...prev,
            {
              id: playerData.id,
              progress: playback._lastStatusUpdate === null
                ? 0
                : JSON.parse(playback._lastStatusUpdate as string).positionMillis,
              title: playerData.title
            }]
          )
        }
        if (recent.length === 4) {
          const verify = recent.some((curr) => curr.id == playerData.id)
          if (verify) {
            return updateProgressRecent(playback)
          }
          setRecent((prev: contextType) => {
            const ids = prev
            ids.shift()
            return [...ids, {
              id: playerData.id,
              progress: playback._lastStatusUpdate === null
                ? 0
                : JSON.parse(playback._lastStatusUpdate as string).positionMillis,
              title: playerData.title
            }]
          })
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

  const changeSpeed = async (n: number) => {
    const status = await playback?.setRateAsync(n, true,)
    setStatus(status)
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
              <View style={stylesAudio.divButton}>
                <TouchableOpacity onPress={() => {
                  if (speed === 1.0) { setSpeed(2.0); changeSpeed(2.0) }
                  if (speed === 2.0) { setSpeed(0.5); changeSpeed(0.5) }
                  if (speed === 0.5) { setSpeed(1.0); changeSpeed(1.0) }
                }}>
                  <Text style={stylesAudio.title}>{`${speed} x`}</Text>
                </TouchableOpacity>
              </View>
              <View style={stylesAudio.divButton}>
                <AntDesign
                  name={
                    status.isPlaying ? 'pausecircle' : 'playcircleo'
                  }
                  color={'white'}
                  size={60}
                  onPress={onAudioPress}
                />
              </View>
              <View style={stylesAudio.divButton}>
                <TouchableOpacity onPress={() => {
                }}>
                  <Text style={stylesAudio.title}>?</Text>
                </TouchableOpacity>
              </View>
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