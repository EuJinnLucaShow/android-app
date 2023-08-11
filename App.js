import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const wallpaper = require('./assets/images/wallpaper.png');

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={wallpaper} style={styles.image}>
        <View>
          <TextInput style={styles.input} placeholder="Логін" />
          <TextInput
            style={{ ...styles.input, marginTop: 16, marginBottom: 16 }}
            placeholder="Адреса електронної пошти"
          />
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Зареєструватися</Text>
          </TouchableOpacity>
        </View>
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
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
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
});
