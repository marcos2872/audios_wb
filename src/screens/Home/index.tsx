import React, { useEffect } from "react";
import {
  Image,
  Linking,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { stylesHome } from "./styles.Home";
import TrackPlayer from "react-native-track-player";

const Home = () => {

  useEffect(() => {
    (async () => {
      try {
          await TrackPlayer.setupPlayer({
          })
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <SafeAreaView style={stylesHome.container}>
      <Text style={stylesHome.title}>William Branham</Text>

      <Image
        source={require("../../assets/images/wmb.jpeg")}
        style={stylesHome.image}
      />

      <TouchableOpacity
        onPress={() => {
          Linking.canOpenURL("https://branham.org/pt/williambranham").then(
            () => {
              Linking.openURL("https://branham.org/pt/williambranham");
            }
          );
        }}
      >
        <Text style={stylesHome.link}>
          Clique aqui para saber mais sobre William Branham
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
