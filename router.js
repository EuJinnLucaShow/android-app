import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import RegistrationScreen from './src/screens/auth/RegistrationScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import PostsScreen from './src/screens/mainScreen/PostsScreen';
import CreatePostsScreen from './src/screens/mainScreen/CreatePostsScreen';
import ProfileScreen from './src/screens/mainScreen/ProfileScreen';

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
        name="Posts"
        component={PostsScreen}
        options={{
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
