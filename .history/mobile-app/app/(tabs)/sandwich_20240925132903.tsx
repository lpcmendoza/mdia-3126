import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';


export default function Page() {
  return (
        <View style={makeItPretty.sandwichPage}>
            <Text>This is a page about sandwiches 🥪</Text>
            <Link href="/">This is my Index page</Link>
            <Link href="/cheese">Cheese 🧀</Link>
        </View>
    )
}

const makeItPretty = StyleSheet.create({
    sandwichPage: {
        borderColor: 'blue',
        borderWidth: 2,
        borderStyle: 'dashed'
    }
})