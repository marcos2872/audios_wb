import { View, Text, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import Slider from '@react-native-community/slider'
import { stylesAudio } from './style.Audio'
import { convertTime } from '../../utils/convertTime'
import theme from '../../constants/theme'
import { IData } from '../../interfaces/IDataApi'
import { Context } from '../../context'
import { setFavorite } from '../../utils/favorite'
import TrackPlayer, { useProgress, usePlaybackState, State, Capability } from 'react-native-track-player'

type propsType = {
  playerData: IData
}
type contextType = {
  id: string,
  progress: number
}[] | []

const TrackPlayback = ({ playerData }: propsType) => {
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState(1.0)
  const [isFavorite, setIsFavorite] = useState(false)
  const { width } = Dimensions.get('window')
  const { setRecent, recent, favorites, setFavorites } = useContext(Context)

  const progress = useProgress()
  const playBackState = usePlaybackState()

  useEffect(() => {
    (async () => {
      try {
        // await TrackPlayer.setupPlayer({})
        await TrackPlayer.reset()
        await TrackPlayer.updateOptions({
        capabilities: [
          Capability.Play,
          Capability.Pause,
        ],
      });
      await TrackPlayer.add([{
        id: playerData.id,
        url: playerData.audio,
        title: playerData.title,
        artist: 'WMB',
        artwork: require('../../../assets/images/cover.png'),
      }])
      
      setIsFavorite(favorites.some((curr) => curr.id === playerData.id))
    } catch (error) {
      console.log(error)        
    }
    })()
  }, [])

  useEffect(() => {
    setPlaying(playBackState === State.Playing)
  }, [playBackState])

  const teste = async () => {
    const track = await TrackPlayer.getCurrentTrack() as number
    await TrackPlayer.remove(track)
    await TrackPlayer.reset()
  }

  useEffect(() => {
    return () => {
      teste()
      if (recent.length < 4) {
        const verify = recent.some((curr: {id: string}) => curr.id === playerData.id)
        if (verify) {
          return /* updateProgressRecent(playback) */
        }
        setRecent((prev: contextType) =>
          [...prev,
          {
            id: playerData.id,
            // progress: playback._lastStatusUpdate === null
            //   ? 0
            //   : JSON.parse(playback._lastStatusUpdate as string).positionMillis,
            title: playerData.title
          }]
        )
      }
      if (recent.length === 4) {
        const verify = recent.some((curr) => curr.id == playerData.id)
        if (verify) {
          return/*  updateProgressRecent(playback) */
        }
        setRecent((prev: contextType) => {
          const ids = prev
          ids.shift()
          return [...ids, {
            id: playerData.id,
            // progress: playback._lastStatusUpdate === null
            //   ? 0
            //   : JSON.parse(playback._lastStatusUpdate as string).positionMillis,
            title: playerData.title
          }]
        })
      }
    }
  }, [])

  const togglePlayback = async () => {
    const state = await TrackPlayer.getState()
    if (state === State.Playing) {
      setPlaying(false)
      return await TrackPlayer.pause()
    }
    setPlaying(true)
    return await TrackPlayer.play()
  }

  const changeSpeed = async (n: number) => {
    await TrackPlayer.setRate(n)
  }

  const toggleFavorite = async () => {
    if (isFavorite) {
      const favF = favorites.filter((curr) => curr.id !== playerData.id)
      setFavorites(favF)
      await setFavorite(favF)
      return setIsFavorite(false)
    }
    const favT = [...favorites, { id: playerData.id, title: playerData.title }]
    setFavorites(favT)
    await setFavorite(favT)
    setIsFavorite(true)
  }

  return (
    <SafeAreaView style={stylesAudio.main}>
      {progress.duration !== 0 ? (
        <>
          <View style={stylesAudio.menu}>
            <Text style={stylesAudio.title}>
              {playerData.title}
            </Text>
            <View>
              <View style={stylesAudio.count}>
                <Text style={stylesAudio.text}>{convertTime(progress.position * 1000)}</Text>
                <Text style={stylesAudio.text}>{convertTime(progress.duration * 1000)}</Text>
              </View>
              <Slider
                style={{ width: width, height: 40 }}
                minimumValue={0}
                maximumValue={progress.duration * 1000}
                value={progress.position * 1000}
                minimumTrackTintColor={theme.colors.select}
                maximumTrackTintColor={theme.colors.whiteOpacity}
                onValueChange={async value => {
                  // await TrackPlayer.seekTo(value)
                }}
                onSlidingComplete={async value => {
                  // await TrackPlayer.reset()
                }}
              />
            </View>
            <View style={stylesAudio.buttons}>
              <TouchableOpacity style={stylesAudio.divButton} onPress={() => {
                if (speed === 1.0) { setSpeed(1.5); changeSpeed(1.5) }
                if (speed === 1.5) { setSpeed(2.0); changeSpeed(2.0) }
                if (speed === 2.0) { setSpeed(0.5); changeSpeed(0.5) }
                if (speed === 0.5) { setSpeed(1.0); changeSpeed(1.0) }
              }}>
                <Text style={stylesAudio.title}>{`${speed} x`}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={stylesAudio.divButton} onPress={togglePlayback}>
                <FontAwesome5
                  name={
                    playing ? 'pause' : 'play'
                  }
                  color={theme.colors.text}
                  size={50}
                />
              </TouchableOpacity>
              <TouchableOpacity style={stylesAudio.divButton} onPress={toggleFavorite}>
                <FontAwesome5
                  name='heart'
                  color={
                    isFavorite ? theme.colors.select : theme.colors.text
                  }
                  size={20}
                />
              </TouchableOpacity>
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

export default TrackPlayback