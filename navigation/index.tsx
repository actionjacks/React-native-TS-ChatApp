import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from '../constants/Colors'
import { View } from '../components/Themed';

//icons
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ChatRoomScreen from './../screens/ChatRoom';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator 
    screenOptions={{ headerShown: true,
    headerStyle:{
    backgroundColor:Colors.light.tint,
    shadowOpacity:0,
    elevation:0,
    borderBottomWidth:0
  },
    headerTintColor:Colors.light.background,
    headerTitleAlign:'left',
    headerTitleStyle:{fontWeight:'bold'},
    }}>
      <Stack.Screen name="Root"
       component={MainTabNavigator}
       options={{
         title:"BarbraStreisand-Chat",
         headerRight:()=>(
           <View style={{flexDirection:'row',
            width:60, 
            justifyContent:'space-between',
            marginRight:10,
            backgroundColor:'transparent'
            }}>
             <Ionicons name="md-search" size={24} color={'white'}/>
             <MaterialCommunityIcons name="dots-vertical" size={24} color={'white'}/>
           </View>
         )
        
        }}
       />
      
      <Stack.Screen name="ChatRoom" 
      component={ChatRoomScreen} 
      options={{ title: 'Chat Room' }} 
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
