import { Text, View } from 'react-native';
import { Link } from 'expo-router';


export default function Page() {
  return (
        <View>
            <Text>This is a page about cheese 🧀</Text>
            <Link href="/">This is my Index page</Link>
            <Link href="/sandwich">Sandwich 🥪</Link>
        </View>
    )
}