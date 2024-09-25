import { Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';


export default function Page() {
  return (
        <View>
            <Text className='border-red-700 border-2'>This is a page about cheese 🧀</Text>
            <Link href="/sandwich">Sandwich 🥪</Link>
            <Link href="/" asChild>
                <Pressable>
                    <Text>Index 🍓</Text>
                </Pressable>
            </Link>
        </View>
    )
}