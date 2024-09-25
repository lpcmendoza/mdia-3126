import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';


export default function Page() {
  return (
        <View style={makeItPretty.sandwichPage}>
            <Text style={makeItPretty.pageTitle}>This is a page about sandwiches 🥪</Text>
            <Link href="/">This is my Index page</Link>
            <Link href="/cheese">Cheese 🧀</Link>
        </View>
    )
}

const makeItPretty = StyleSheet.create({
    sandwichPage: {
        margin: 50,
        borderColor: 'blue',
        borderWidth: 2,
        borderStyle: 'dashed'
    },
    pageTitle: {
        fontSize: 50,
        fontWeight: 'bold'
    }
})