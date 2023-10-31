import React from "react"
import { View, Text} from "react-native"

export default function Contact({navigation}) {
    return (
        <View>
            <View>
                <Text>Name: Fulano da silva</Text>
                <Text>Phone: (62) 99449-2619</Text>
            </View>
            <Text
                onPress={() => navigation.navigate('Information',
                {
                    name: 'Fulano da silva',
                    phone: '(62) 99449-2619',
                    adress: 'Rua 10',
                    number: '765',
                    profession: 'Engineer',
                    email: 'fulanodasilva@gmail.com'
                }
            )}
            >Information...</Text>
             <View style={{marginTop: 20}}>
                <Text>Name: Beltrano da silva</Text>
                <Text>Phone: (11) 99195-0912</Text>
            </View>
            <Text
                onPress={() => navigation.navigate('Information', {
                    name: 'Beltrano da silva',
                    phone: '(11) 99195-0912',
                    adress: 'Rua 80',
                    number: '997',
                    profession: 'Teacher',
                    email: 'beltranodasilva@gmail.com'
                })      
            }
            >Information...</Text>
        </View>
    )
}