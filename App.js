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
} from 'react-native';

const wallpaper = require('./assets/images/wallpaper.png');

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={wallpaper} style={styles.image}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
            />
            <TextInput
              style={{ ...styles.input, marginTop: 16, marginBottom: 16 }}
              placeholder="Адреса електронної пошти"
              onFocus={() => setIsShowKeyboard(true)}
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              secureTextEntry={true}
              onFocus={() => setIsShowKeyboard(true)}
            />
            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
              <Text style={styles.buttonText}>Зареєструватися</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Вже є акаунт? Увійти</Text>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
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
    fontFamily: 'Roboto',
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
    marginBottom: 66,
  },
});
