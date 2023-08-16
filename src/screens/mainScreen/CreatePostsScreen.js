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
} from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, Feather, SimpleLineIcons } from '@expo/vector-icons';

export default function CreatePostsScreen() {
  const [camera, setCamera] = useState(null);

  const takePhoto = async () => {
    if (camera) {
      const photo = await camera.takePictureAsync(null);
      console.log(photo.uri);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.createPostsScreenContainer}>
          <View style={{ paddingLeft: 16, paddingRight: 16 }}>
            <Camera
              style={{
                marginTop: 32,
                width: 350,
                height: 240,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              type={Camera.Constants.Type.back}
              ref={setCamera}
            >
              <TouchableOpacity
                style={styles.addPhotoButton}
                opacity={0.5}
                onPress={takePhoto}
              >
                <FontAwesome name="camera" size={24} color="#fff" />
              </TouchableOpacity>
            </Camera>

            <Text
              style={{
                fontSize: 16,
                color: '#BDBDBD',
                fontWeight: '400',
                lineHeight: 19,
                marginTop: 8,
              }}
            ></Text>

            <TextInput style={styles.photoMetaInput} placeholder="Назва..." />
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
              />
            </View>
            <TouchableOpacity activeOpacity={0.5}>
              <Text>Опубліковати</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.removePostButton}>
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
    width: '100%',
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
    width: '100%',
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
