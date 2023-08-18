import React from 'react';
import { moduleName } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import PostsScreen from '../nestedScreens/PostsScreen';
import CommentsScreen from '../nestedScreens/CommentsScreen';
import CreatePostsScreen from '../nestedScreens/CreatePostsScreen';

const NestedScreen = createStackNavigator();

const HomeScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen name="Posts" component={PostsScreen} />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="CreatePosts" component={CreatePostsScreen} />
    </NestedScreen.Navigator>
  );
};

export default NestedScreen;
