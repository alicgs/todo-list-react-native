import {  View } from 'react-native'
import React from 'react'
import Login from '../components/auth/Login'

export default function LoginScreen({navigation}) {
  return (
    <View>
      <Login navigation={navigation}/>
    
    </View>
  )
}
