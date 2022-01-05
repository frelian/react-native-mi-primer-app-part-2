import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Style } from 'react-native';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(1)

    return (
        <View style={ styles.container }>
            <Text style={ styles.title } >
                Contador: { contador }
            </Text>

            <TouchableOpacity
                onPress={ () => setContador( contador + 1 ) }
            >
                <View style={ styles.bottonIncrement }>
                    <Text>Click me !</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -15,
    },
    bottonIncrement: {
        backgroundColor: 'gray',
        borderRadius: 80,
        paddingLeft: 10,
    }
})
