import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
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
});
