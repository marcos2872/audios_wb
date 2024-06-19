import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { stylesAudio } from "./style.Audio";
import { convertTime } from "../../utils/convertTime";
import theme from "../../constants/theme";
import { IData } from "../../interfaces/IDataApi";
import { Context } from "../../context";
import { setFavorite } from "../../utils/favorite";
import TrackPlayer, {
  useProgress,
  usePlaybackState,
  State,
  Capability,
} from "react-native-track-player";
import { IRecents } from "../../interfaces/IRecents";
import useTheme from "../../hooks/useTheme";

type propsType = {
  playerData: IData;
};
type contextType =
  | {
      id: string;
      progress: number;
    }[]
  | [];

type audioType = 'pt-br' | 'en-us';

let currentPosition = 0;

const TrackPlayback = ({ playerData }: propsType) => {
  const [speed, setSpeed] = useState(1.0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState<audioType>('pt-br');
  const { width } = Dimensions.get("window");
  const { setRecent, recent, favorites, setFavorites } = useContext(Context);

  const progress = useProgress();
  const playBackState = usePlaybackState();
  const { colors } = useTheme();

  const setTrackPlayer = useCallback(async (audio: audioType) => {
    try {
      await TrackPlayer.reset();
      await TrackPlayer.updateOptions({
        capabilities: [Capability.Play, Capability.Pause],
        compactCapabilities: [Capability.Play, Capability.Pause],
        notificationCapabilities: [Capability.Play, Capability.Pause],
      });
      await TrackPlayer.add([
        {
          id: playerData.id,
          url: audio === 'pt-br' ? playerData.audio : playerData.audio_en,
          title: playerData.title,
          artist: "WMB",
          artwork: require("../../../assets/images/739567.jpg"),
        },
      ]);

      await TrackPlayer.setVolume(1);
      setIsFavorite(favorites.some((curr) => curr.id === playerData.id));

      recent.forEach((curr: IRecents) => {
        if (playerData.id === curr.id) {
          TrackPlayer.seekTo(curr.progress);
        }
      });
      setSelectedAudio(audio);
    } catch (error) {
      console.log("tracker", error);
    }
  }, []);

  useEffect(() => {
    if (progress.position > 1) {
      currentPosition = progress.position;
    }
  }, [progress.position]);

  const updateProgressRecent = () => {
    setRecent((prev: contextType) =>
      prev.map((curr) => {
        if (curr.id === playerData.id) {
          return {
            ...curr,
            progress: currentPosition,
          };
        }
        return curr;
      })
    );
  };

  const umount = async () => {
    // const track = await TrackPlayer.getCurrentTrack() as number
    // await TrackPlayer.remove(track)
    await TrackPlayer.reset();
    TrackPlayer.removeUpcomingTracks;
  };

  useEffect(() => {
    setTrackPlayer('pt-br')
    return () => {
      umount();

      if (recent.length < 4) {
        const verify = recent.some(
          (curr: { id: string }) => curr.id === playerData.id
        );
        if (verify) {
          return updateProgressRecent();
        }
        setRecent((prev: contextType) => [
          ...prev,
          {
            id: playerData.id,
            title: playerData.title,
            progress: currentPosition,
          },
        ]);
      }
      if (recent.length === 4) {
        const verify = recent.some((curr) => curr.id == playerData.id);
        if (verify) {
          return updateProgressRecent();
        }
        setRecent((prev: contextType) => {
          const ids = prev;
          ids.shift();
          return [
            ...ids,
            {
              id: playerData.id,
              title: playerData.title,
              progress: currentPosition,
            },
          ];
        });
      }
    };
  }, []);

  const toggleRate = useCallback(async () => {
    const rate = await TrackPlayer.getRate();
    if (rate === 1.0) {
      setSpeed(1.5);
      changeSpeed(1.5);
    }
    if (rate === 1.5) {
      setSpeed(2.0);
      changeSpeed(2.0);
    }
    if (rate === 2.0) {
      setSpeed(0.5);
      changeSpeed(0.5);
    }
    if (rate === 0.5) {
      setSpeed(1.0);
      changeSpeed(1.0);
    }
  }, []);

  const togglePlayback = useCallback(async () => {
    const state = (await TrackPlayer.getPlaybackState()).state;

    if (state === State.Playing) {
      await TrackPlayer.pause();
      return;
    }
    await TrackPlayer.play();
    return;
  }, [playBackState.state]);

  const playing = useMemo(() => {
    const state = playBackState.state
    if (state === State.Playing) return true;
    return false;
    
  }, [playBackState.state])

  const changeSpeed = async (n: number) => {
    await TrackPlayer.setRate(n);
  };

  const toggleFavorite = async () => {
    
    if (isFavorite) {
      const favF = favorites.filter((curr) => curr.id !== playerData.id);
      setFavorites(favF);
      await setFavorite(favF);
      return setIsFavorite(false);
    }
    const favT = [...favorites, { id: playerData.id, title: playerData.title, details: playerData.details}];
    setFavorites(favT);
    await setFavorite(favT);
    setIsFavorite(true);
  };

  return (
    <SafeAreaView style={stylesAudio.main}>
      {progress.duration !== 0 ? (
        <View style={stylesAudio.menu}>
          <View style={stylesAudio.changeAudioContainer}>
            <TouchableOpacity
              disabled={!playerData.audio.length}
              style={{
                backgroundColor:
                  selectedAudio === 'pt-br' ? colors.color3 : colors.color2,
                padding: 5,
                borderRadius: 5,
              }}
              onPress={() => setTrackPlayer('pt-br')}
            >
              <Text style={stylesAudio.text}>Pt-br</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={!playerData.audio_en.length}
              style={{
                backgroundColor:
                  selectedAudio === 'en-us' ? colors.color3 : colors.color2,
                padding: 5,
                borderRadius: 5,
              }}
              onPress={() => setTrackPlayer('en-us')}
            >
              <Text style={stylesAudio.text}>En-us</Text>
            </TouchableOpacity>
          </View>
          <Text style={stylesAudio.title}>{playerData.title}</Text>
          <View>
            <View style={stylesAudio.count}>
              <Text style={stylesAudio.text}>
                {convertTime(progress.position * 1000)}
              </Text>
              <Text style={stylesAudio.text}>
                {convertTime(progress.duration * 1000)}
              </Text>
            </View>
            <Slider
              style={{ width: width - 20, height: 40 }}
              minimumValue={0}
              maximumValue={progress.duration}
              value={progress.position}
              minimumTrackTintColor={theme.colors.select}
              maximumTrackTintColor={theme.colors.whiteOpacity}
              onValueChange={(val) => {
                TrackPlayer.seekTo(val);
              }}
            />
          </View>
          <View style={stylesAudio.buttons}>
            <TouchableOpacity
              style={stylesAudio.divButton}
              onPress={toggleRate}
            >
              <Text style={stylesAudio.title}>{`${speed} x`}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={stylesAudio.divButton}
              onPress={togglePlayback}
            >
              <FontAwesome5
                name={playing ? "pause" : "play"}
                color={theme.colors.text}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={stylesAudio.divButton}
              onPress={toggleFavorite}
            >
              <FontAwesome5
                name="heart"
                color={isFavorite ? theme.colors.select : theme.colors.text}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Text style={stylesAudio.title}>Carregando player...</Text>
      )}
    </SafeAreaView>
  );
};

export default TrackPlayback;
