import { Text } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
        <Text>This is a page about sandwiches 🥪</Text>;
        <Link href="/cheese">Cheese 🧀</Link>
    </View>
  )
}