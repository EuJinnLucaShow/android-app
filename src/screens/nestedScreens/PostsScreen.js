import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

export default function PostsScreen({ route }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    if (route.params?.photo) {
      setPost(prevState => [
        ...prevState,
        { id: Date.now(), photo: route.params.photo },
      ]);
    }
  }, [route.params?.photo]);

  const Item = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.photo }} style={{ height: 200 }} />
      <Text>tttttttttttt</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={post} renderItem={Item} keyExtractor={item => item.id} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
