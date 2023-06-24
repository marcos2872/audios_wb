import { Text, SafeAreaView, TouchableOpacity, View, Linking, Alert, Button } from 'react-native'
import React, { useCallback } from 'react'
import { stylesAbout } from './styles.about'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const About = () => {
  const navigation = useNavigation()

  const OpenURLButton = ({url, children}: {
    url: string;
    children: string;
  }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <TouchableOpacity onPress={handlePress}><Text style={stylesAbout.link}>{children}</Text></TouchableOpacity>;
  };

  return (
    <SafeAreaView style={stylesAbout.safeArea}>
      <TouchableOpacity
      style={stylesAbout.header}
      onPress={() => {
        navigation.goBack()
      }}
      >
        <AntDesign
          name='left'
          size={25}
          style={stylesAbout.arrow}
        />
      </TouchableOpacity>
      <View style={stylesAbout.container}>
      <View style={stylesAbout.viewLink}>
      <Text style={stylesAbout.text}>Desenvolvido por: Marcos Brito</Text>
      <OpenURLButton url='https://www.linkedin.com/in/marcos-brito-dev/'>Linkedin</OpenURLButton>
      </View>
      <View style={stylesAbout.viewLink}>
      <Text style={stylesAbout.text}>Todos os direitos dos áudios reservados a</Text>
      <OpenURLButton url='https://branham.org/pt/MessageAudio'>Voice Of God Recording</OpenURLButton>
      </View>
      <View style={stylesAbout.viewLink}>
      <OpenURLButton url='https://marcosbritodeveloper.blogspot.com/2023/05/privacy-policy-marcos-brito-built.html'>política de Privacidade</OpenURLButton>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default About