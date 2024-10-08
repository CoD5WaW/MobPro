import { View, Text } from 'react-native'
import React from 'react'

export default function explore() {
  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }}>      
      <Text style={{
        fontFamily:'montserrat',
        fontSize:40
      }}>explore screen
      </Text>
    </View>
  )
}