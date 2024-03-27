
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
        title:'ቤተክርስቲያን',
        tabBarIcon:({color, size})=><FontAwesome5 name="home" color={color}size={size}/>,

      }}/>
      <Tabs.Screen name="Books" options={{
        tabBarLabel:'Books',
        tabBarIcon:({color, size})=><FontAwesome5 name="bible" color={color}size={size}/>,

      }}/>
      <Tabs.Screen name="መዝሙሮች" options={{
        tabBarLabel:'መዝሙሮች',
        tabBarIcon:({color, size})=><FontAwesome5 name="cross" color={color}size={size}/>,

      }}/>
       <Tabs.Screen name="News" options={{
        tabBarLabel:'News',
        title:'የቤተክርስቲያን ዜናዎች',
        tabBarIcon:({color, size})=><MaterialCommunityIcons name="newspaper-variant-outline" color={color}size={size}/>,
        
      }}/>
       <Tabs.Screen name="Menu" options={{
        tabBarLabel:'Menu',
        tabBarIcon:({color, size})=><Ionicons name="menu" color={color}size={size}/>,

      }}/>
      
    </Tabs>
  )
}

export default Layout