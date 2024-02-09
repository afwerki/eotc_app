
import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

const Layout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor:Colors.primary,
      tabBarLabelStyle:{
        fontFamily:'mon-sb'
      }
    }}
    >
      <Tabs.Screen name="index" options={{
        tabBarLabel:'Home',
        tabBarIcon:({color, size})=><FontAwesome5 name="home" color={color}size={size}/>,

      }}/>
      <Tabs.Screen name="Bible" options={{
        tabBarLabel:'Bible',
        tabBarIcon:({color, size})=><FontAwesome5 name="bible" color={color}size={size}/>,

      }}/>
      <Tabs.Screen name="trips" options={{
        tabBarLabel:'Chruch Songs',
        tabBarIcon:({color, size})=><FontAwesome5 name="cross" color={color}size={size}/>,

      }}/>
       <Tabs.Screen name="inbox" options={{
        tabBarLabel:'Inbox',
        tabBarIcon:({color, size})=><MaterialCommunityIcons name="message-outline" color={color}size={size}/>,

      }}/>
       <Tabs.Screen name="profile" options={{
        tabBarLabel:'Profile',
        tabBarIcon:({color, size})=><Ionicons name="person-circle" color={color}size={size}/>,

      }}/>
      
    </Tabs>
  )
}

export default Layout