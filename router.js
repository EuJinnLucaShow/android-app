import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import RegistrationScreen from './src/screens/auth/RegistrationScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import HomeScreen from './src/screens/mainScreens/HomeScreen';
import CreatePostsScreen from './src/screens/mainScreens/CreatePostsScreen';
import ProfileScreen from './src/screens/mainScreens/ProfileScreen';

import { Feather } from '@expo/vector-icons';

export const UseRoute = isAuth => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Registration" component={RegistrationScreen} />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 80 },
      }}
    >
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Feather
              name="grid"
              size={focused ? 30 : size}
              color={focused ? '#FF6C00' : color}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather
              name="plus"
              size={focused ? 30 : size}
              color={focused ? '#FF6C00' : color}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather
              name="user"
              size={focused ? 30 : size}
              color={focused ? '#FF6C00' : color}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
