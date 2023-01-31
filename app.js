import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './component/Homepage';
import { Detailspage } from './component/Detailspage';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="Detailspage" component={Detailspage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


