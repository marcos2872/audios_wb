import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native';

const Player = () => {
  const { params: { id } } = useRoute() as { params: { id: string } };
  console.log(id);
  
  return (
    <View>
      <Text>Player</Text>
    </View>
  )
}

export default Player