import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import { FontAwesome, Feather, SimpleLineIcons } from '@expo/vector-icons';

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function CreatePostsScreen({ navigation }) {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [photoName, setPhotoName] = useState(null);
  const [location, setLocation] = useState(null);

  const clearData = () => {
    setPhoto(null);
    setPhotoName(null);
    setLocation(null);
  };

  const takePhoto = async () => {
    if (camera) {
      const photo = await camera.takePictureAsync(null);
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      setLocation(location);
      setPhoto(photo.uri);
      console.log(photo.uri);
    }
  };

  const sendPhoto = async () => {
    try {
      await uploadPhotoToServer(); // Pass the location name to the function
      navigation.navigate('Posts', { photo, location });
      clearData();
    } catch (error) {
      console.error('Error sending photo:', error);
    }
  };

  const uploadPhotoToServer = async () => {
    const uniqPostId = Date.now().toString();
    try {
      const response = await fetch(photo);
      const file = await response.blob();
      const imageRef = ref(storage, `postImage/${uniqPostId}`);
      await uploadBytes(imageRef, file);

      const processedPhoto = await getDownloadURL(imageRef);
      return processedPhoto;
    } catch (error) {
      console.log('error', error.message);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    })();
  }, []); // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.createPostsScreenContainer}>
          <View>
            {photo ? (
              <View
                style={{
                  marginTop: 32,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={{ uri: photo }}
                  style={{
                    width: 350,
                    height: 240,
                    borderRadius: 8,
                  }}
                />
                <TouchableOpacity style={styles.addPhotoButton} opacity={0.5}>
                  <FontAwesome name="camera" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
            ) : (
              <Camera
                style={{
                  borderRadius: 8,
                  marginTop: 32,
                  width: 350,
                  height: 240,
                }}
                type={Camera.Constants.Type.back}
                ref={ref => setCamera(ref)} // Assign the Camera instance to the camera state
              >
                <TouchableOpacity
                  style={styles.addPhotoButton}
                  opacity={0.5}
                  onPress={takePhoto}
                >
                  <FontAwesome name="camera" size={24} color="#fff" />
                </TouchableOpacity>
              </Camera>
            )}

            <Text
              style={{
                fontSize: 16,
                color: '#BDBDBD',
                fontWeight: '400',
                lineHeight: 19,
                marginTop: 8,
              }}
            >
              {' '}
              {photo ? 'Редагувати фото' : 'Завантажте фото'}
            </Text>

            <TextInput
              style={styles.photoMetaInput}
              placeholder="Назва..."
              type={'text'}
              name={'photoName'}
              value={photoName}
              onChangeText={setPhotoName}
            />
            <View style={{ position: 'relative', marginBottom: 32 }}>
              <TouchableOpacity style={styles.mapButton}>
                <SimpleLineIcons
                  name="location-pin"
                  size={20}
                  color="#BDBDBD"
                />
              </TouchableOpacity>
              <TextInput
                style={[styles.photoMetaInput, { paddingLeft: 28 }]}
                placeholder="Місцевість..."
                type={'text'}
                name={'photoLocation'}
                value={
                  location
                    ? location.coords.latitude + ' ' + location.coords.longitude
                    : ''
                }
                onChangeText={setLocation}
              />
            </View>
            <TouchableOpacity
              style={[
                styles.publishButton,
                photo
                  ? { backgroundColor: '#FF6C00' }
                  : { backgroundColor: '#F6F6F6' },
              ]}
              activeOpacity={0.5}
              onPress={sendPhoto}
              disabled={!photo}
            >
              <Text
                style={[
                  {
                    fontSize: 16,
                    textAlign: 'center',
                    color: '#ffffff',
                  },
                  photo
                    ? {
                        backgroundColor: '#FF6C00',
                      }
                    : {
                        color: '#BDBDBD',
                        backgroundColor: '#F6F6F6',
                      },
                ]}
              >
                Опубліковати
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.removePostButton} onPress={clearData}>
            <Feather name="trash-2" size={24} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  createPostsScreenContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addPhotoButton: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 50,
  },
  photoMetaInput: {
    height: 50,
    marginBottom: 16,
    fontSize: 16,
    color: '#212121',
    borderStyle: 'solid',
    borderColor: '#E8E8E8',
    borderBottomWidth: 1,
  },
  mapButton: {
    position: 'absolute',
    top: 13,
  },
  publishButton: {
    height: 50,
    marginBottom: 120,
    padding: 16,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
  },
  removePostButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 40,
    borderRadius: 20,
  },
});
