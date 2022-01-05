import React from 'react'
import { Text, View } from 'react-native';

const App = () => {
  return (
    <View style={{
        flex: 1,
        // backgroundColor: 'gray',
        justifyContent: 'center',

    }}>
        <Text style={{
            fontSize: 50,
            textAlign: 'center',
        }}
        >Hola mundo :)</Text>
    </View>
  )
}

export default App;
