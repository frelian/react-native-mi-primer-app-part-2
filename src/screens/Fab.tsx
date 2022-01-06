import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

// Sin desestructurar el props: export const Fab = ( props: Props ) => {
// Desestructuro el props segun la interfaz creada
// FAB = Float Action Button ( solo un nombre personal )
export const Fab = ( { title, onPress, position = 'br' }: Props ) => {

    // console.log(props.title)

    // ( position === 'bl' )
    //     ? styles.fabLocationBL
    //     : styles.fabLocationBR

    return (

        <View
            style={[
                styles.fabLocation,
                ( position === 'bl' ? styles.left : styles.right )
            ]}
        >
            <TouchableNativeFeedback
                onPress={ onPress }
                background={ TouchableNativeFeedback.Ripple('#2d2d71', false, 30) }
            >
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }>{ title }</Text>
                </View>
            </TouchableNativeFeedback>
        </View>


    )
}

const styles = StyleSheet.create({

    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        
        elevation: 8,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})