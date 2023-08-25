import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { authSignInUser } from '../../redux/auth/authOperations';

const wallpaper = require('../../assets/images/wallpaper.png');

const initialState = {
  email: '',
  password: '',
};

export default function LoginScreen({ navigation }) {
  const [state, setState] = useState(initialState);
  const [isShowKeybord, setIsShowKeybord] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    setIsShowKeybord(false);
    Keyboard.dismiss();
    dispatch(authSignInUser(state));
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss(), setIsShowKeybord(false);
      }}
    >
      <View style={styles.container}>
        <ImageBackground source={wallpaper} style={styles.backgroundImage}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.containerKeyBoard}
          >
            <View
              style={{
                ...styles.innerContainer,
                paddingBottom: isShowKeybord ? 0 : 115,
              }}
            >
              <Text style={styles.title}>Увійти</Text>
              <TextInput
                style={styles.input}
                onFocus={() => {
                  setIsShowKeybord(true);
                }}
                value={state.email}
                onChangeText={value =>
                  setState(prevState => ({ ...prevState, email: value }))
                }
                placeholder="Адреса електронної пошти"
                autoComplete="email"
                keyboardType="email-address"
              />

              <TextInput
                style={styles.input}
                onFocus={() => {
                  setIsShowKeybord(true);
                }}
                placeholder="Пароль"
                autoComplete="password"
                secureTextEntry={true}
                value={state.password}
                onChangeText={value =>
                  setState(prevState => ({ ...prevState, password: value }))
                }
              />

              <TouchableOpacity style={styles.showPassword} activeOpacity={0.5}>
                <Text style={styles.showPasswordText}>Показати</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.5}
                onPress={handleSubmit}
              >
                <Text style={styles.titlebutton}>Увійти</Text>
              </TouchableOpacity>
              <Text style={styles.titletext}>
                Немає акаунту?{' '}
                <Text
                  style={{ color: '#FF6C00', textDecorationLine: 'underline' }}
                  onPress={() => navigation.navigate('Registration')}
                >
                  Зареєструватися
                </Text>
              </Text>
            </View>
          </KeyboardAvoidingView>
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  containerKeyBoard: {
    // justifyContent: 'flex-end',
  },
  innerContainer: {
    width: '100%',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },
  title: {
    color: '#212121',
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    lineHeight: 35,
    letterSpacing: 0.3,
    marginTop: 32,
    marginBottom: 32,
  },
  input: {
    width: 343,
    height: 50,
    margin: 8,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  inputFocus: {
    borderColor: '#FF6C00',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#FF6C00',
    height: 50,
    width: 343,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 20,
  },
  titlebutton: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  showPassword: {
    top: -45,
    left: 130,
  },
  showPasswordText: {
    color: '#1B4371',
    fontFamily: 'Roboto',
  },
  titletext: {
    color: '#1B4371',
    fontFamily: 'Roboto',
    fontSize: 16,

    textAlign: 'center',
    marginTop: 16,
  },
});
