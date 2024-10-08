import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Colors} from './../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:Colors.Primary
    }}>

      <Tabs.screen name='home'
      options={{
        tabBarLabel:'Home',
        tabBarIcon:({color})=><FontAwesome name="home"
        size={24} color={color} />
      }}/>

      <Tabs.screen name='explore'
      options={{
        tabBarLabel:'Explore',
        tabBarIcon:({color})=><FontAwesome name="search"
        size={24} color={color} />
      }}/>

      <Tabs.screen name='profile'
      options={{
        tabBarLabel:'Profile',
        tabBarIcon:({color})=><FontAwesome name="people-circle"
        size={24} color={color} />
      }}/>    
      
    </Tabs>
  )
}