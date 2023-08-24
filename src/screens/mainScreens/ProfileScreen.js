import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Feather, AntDesign } from '@expo/vector-icons';
import { authSingOutUser } from '../../redux/auth/authOperations';

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const singOut = () => {
    dispatch(authSingOutUser());
  };

  return (
    <ImageBackground style={styles.imageBackground}>
      <View style={styles.container}>
        <View style={styles.photoContainer}>
          <Image style={{ width: '100%', height: '100%', borderRadius: 16 }} />
          <TouchableOpacity style={styles.addButton} activeOpacity={0.5}>
            <AntDesign name="closecircleo" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Natali Romanova</Text>
        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.5}
          onPress={singOut}
        >
          <Feather name="log-out" size={25} color="gray" />
        </TouchableOpacity>

        <ScrollView
          style={{ margin: 0, padding: 0 }}
          showsVerticalScrollIndicator={false}
        ></ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  containerKeyBoard: {
    justifyContent: 'flex-end',
  },
  container: {
    width: '100%',
    height: '80%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },
  photoContainer: {
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    alignSelf: 'center',
    marginBottom: 40,
  },
  logoutButton: {
    position: 'absolute',
    top: 22,
    right: 16,
  },
  addButton: {
    marginTop: -40,
    left: '90%',
    height: 25,
    width: 25,
    pointerEvents: 'auto',
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
  },
  title: {
    position: 'absolute',
    marginTop: 90,
    alignSelf: 'center',
    fontFamily: 'Roboto',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
  },
});
