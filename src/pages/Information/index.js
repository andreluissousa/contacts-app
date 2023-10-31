import React from "react"
import { View, Text} from "react-native"

export default function Information({ route }) {
    return (
        <View>
            <Text>{route.params?.name}</Text>
            <Text>{route.params?.phone}</Text>
            <Text>{route.params?.adress}</Text>
            <Text>{route.params?.number}</Text>
            <Text>{route.params?.profession}</Text>
            <Text>{route.params?.email}</Text>
        </View>
    )
}