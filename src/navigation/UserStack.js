import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddTaskScreen, CompletedScreen, HomeScreen, TaskScreen, Profile} from "../screen"
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function UserStack()  {
  return (
   <NavigationContainer>
     <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen name="Home" component={HomeScreen} 
         options={{
          tabBarLabel: ({focused}) => (
            focused
            ?
            <Text className="text-[11px] text-main font-medium">Home</Text>
            :
            <Text className="text-[11px] text-secondary font-medium">Home</Text>
          ),
          tabBarIcon: ({focused}) => (
            focused
            ?
            <AntDesign name="home" size={20} color="#3B5BDB" />
            :
            <AntDesign name="home" size={20} color="#868E96" />
          ),
        }}
      />

      <Tab.Screen name="Task" component={TaskScreen} 
         options={{
          tabBarLabel: ({focused}) => (
            focused
            ?
            <Text className="text-[11px] text-main font-medium">Task</Text>
            :
            <Text className="text-[11px] text-secondary font-medium">Task</Text>
          ),
          tabBarIcon: ({focused}) => (
            focused
            ?
            <FontAwesome5 name="tasks" size={20} color="#3B5BDB" />
            :
            <FontAwesome5 name="tasks" size={20} color="#868E96" />
          ),
        }}
      />

      <Tab.Screen name="Add Task" component={AddTaskScreen} 
       options={{
          tabBarLabel: () => (
            
            <Text className="text-[11px] text-main font-medium">Add Task</Text>
          
          ),
          tabBarIcon: () => (
            <Ionicons name="add-circle-outline" size={32} color="#3B5BDD" />
          ),
        }}
       />

      <Tab.Screen name="Completed" component={CompletedScreen} 
         options={{
          tabBarLabel: ({focused}) => (
            focused
            ?
            <Text className="text-[11px] text-main font-medium">Completed</Text>
            :
            <Text className="text-[11px] text-secondary font-medium">Completed</Text>
          ),
          tabBarIcon: ({focused}) => (
            focused
            ?
            <Feather name="check-square" size={20} color="#3B5BDB" />
            :
            <Feather name="check-square" size={20} color="#868E96" />
          ),
        }}
      />

      <Tab.Screen name="Profile" component={Profile} 
         options={{
          tabBarLabel: ({focused}) => (
            focused
            ?
            <Text className="text-[11px] text-main font-medium">Profile</Text>
            :
            <Text className="text-[11px] text-secondary font-medium">Profile</Text>
          ),
          tabBarIcon: ({focused}) => (
            focused
            ?
            <FontAwesome5 name="user-astronaut" size={20} color="#3B5BDB" />
            :
            <FontAwesome5 name="user-astronaut" size={20} color="#868E96" />
          ),
        }}
      />

    </Tab.Navigator>
   </NavigationContainer>
  )
}




