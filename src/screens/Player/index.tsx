import { View, Text, SafeAreaView, Image, Dimensions } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import { stylesPlayer } from './styles.Player';
import data from '../../mock/data';
import { useEffect, useState } from 'react';
import { IData } from '../../interfaces/IDataApi';
import { Audio, AVPlaybackStatus } from 'expo-av'
import { Sound } from 'expo-av/build/Audio';
import { AntDesign } from '@expo/vector-icons'
import theme from '../../constants/theme';
import { convertTime } from '../../utils/convertTime';

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
  const [progress, setProgress] = useState(0)

  const navigation = useNavigation()
  const { width } = Dimensions.get('window')

  useEffect(() => {
    const info = data.find((curr) => curr.id === id)
    setPlayerData(info || prevData)
  }, [])

  useEffect(() => {
    (async () => {
      if (playerData.url) {

        const playbackObj = new Audio.Sound()
        const status = await playbackObj.loadAsync(
          { uri: playerData.url },
          {progressUpdateIntervalMillis: 1000}
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
        // console.log(sta)
        
      })
    }
  }

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
      {status?.isLoaded ? (
        <>
          <Image
            source={/* uri: /* playerData.url */ require('../../mock/cover/cover.png')}
            style={stylesPlayer.image}
          />

          <View style={stylesPlayer.menu}>
            <Text style={stylesPlayer.title}>
              {playerData.title}
            </Text>
            <View>
              <View style={stylesPlayer.count}>
                <Text style={stylesPlayer.text}>{convertTime(progress)}</Text>
                <Text style={stylesPlayer.text}>{convertTime(Number(status.durationMillis))}</Text>
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
            <View style={stylesPlayer.buttons}>
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
        :
        (
          <Image
            source={require('../../../assets/images/loading-gif.gif')}
            style={stylesPlayer.loading}
          />
        )
      }



    </SafeAreaView>
  )
}


export default Player
