import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { authSignUpUser } from '../../redux/auth/authOperations';

const wallpaper = require('../../assets/images/wallpaper.png');

const initialState = {
  login: '',
  email: '',
  password: '',
};

export default function RegistrationScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    dispatch(authSignUpUser(state));
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss(), setIsShowKeyboard(false);
      }}
    >
      <View style={styles.container}>
        <ImageBackground source={wallpaper} style={styles.image}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1, justifyContent: 'flex-end' }}
          >
            <View style={styles.form}>
              <View
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 16,
                  position: 'relative',
                  left: '50%',
                  marginLeft: -60,
                  marginBottom: 16,
                  backgroundColor: '#F6F6F6',
                }}
              ></View>
              <Text style={styles.title}>Реєстрація</Text>
              <TextInput
                style={styles.input}
                placeholder="Логін"
                onFocus={() => setIsShowKeyboard(true)}
                value={state.login}
                onChangeText={value =>
                  setState(prevState => ({ ...prevState, login: value }))
                }
              />
              <TextInput
                style={{ ...styles.input, marginTop: 16, marginBottom: 16 }}
                placeholder="Адреса електронної пошти"
                onFocus={() => setIsShowKeyboard(true)}
                value={state.email}
                onChangeText={value =>
                  setState(prevState => ({ ...prevState, email: value }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
                onFocus={() => setIsShowKeyboard(true)}
                value={state.password}
                onChangeText={value =>
                  setState(prevState => ({ ...prevState, password: value }))
                }
              />
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Зареєструватися</Text>
              </TouchableOpacity>
              <Text
                style={{
                  ...styles.text,
                  marginBottom: isShowKeyboard ? 0 : 66,
                }}
              >
                Вже є акаунт?{' '}
                <Text
                  style={{ color: '#FF6C00', textDecorationLine: 'underline' }}
                  onPress={() => navigation.navigate('Login')}
                >
                  Увійти
                </Text>
              </Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'fixed',
    justifyContent: 'flex-end',
  },
  form: {
    height: 550,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'flex-end',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#212121',
    fontFamily: 'Roboto-Bold',
    fontWeight: '500',
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  input: {
    marginHorizontal: 16,
    height: 50,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  button: {
    marginHorizontal: 32,
    marginTop: 43,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    paddingVertical: 16,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: '400',
  },
  text: {
    textAlign: 'center',
    color: '#1B4371',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '400',
    marginTop: 16,
  },
});
