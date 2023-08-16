import React from 'react';
import { View, ScrollView } from 'react-native';

export default function PostsScreen() {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
      }}
    >
      <></>
      <ScrollView
        style={{ margin: 0, padding: 16 }}
        showsVerticalScrollIndicator={false}
      ></ScrollView>
    </View>
  );
}
