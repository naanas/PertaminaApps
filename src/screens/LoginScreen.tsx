import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions, // Import Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window'); // Get screen dimensions

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('Transition');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo Pertamina atas */}
      <Image
        source={require('../assets/LogoLogin.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Judul */}
      <Text style={styles.title}>5R-TRACKER</Text>
      <Text style={styles.subtitle}>DSP Plumpang</Text>

      {/* Input Email */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="User ID"
          placeholderTextColor="#888"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Input Password */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Tombol Login */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN AS GUEST</Text>
      </TouchableOpacity>

      {/* Links untuk Forgot Password dan Register */}
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.linkText}>Register</Text>
        </TouchableOpacity>
      </View>

      {/* Logo Pertamina bawah */}
      <Image
        source={require('../assets/PertaminaLogo.png')}
        style={styles.bottomLogo}
        resizeMode="contain"
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2', // Mengubah warna latar belakang menjadi putih
    alignItems: 'center', // Center items horizontally
    justifyContent: 'space-around', // Distribute space evenly
    paddingHorizontal: width * 0.05, // Responsive padding
    marginTop: height * 0.1, // Responsive margin top
  },
  logo: {
    width: width * 0.5, // Responsive width
    height: width * 0.5, // Adjust height to maintain aspect ratio
    marginBottom: height * 0.01, // Responsive margin bottom
  },
  title: {
    fontSize: width * 0.05, // Responsive font size
    fontWeight: 'bold',
    color: '#000',
    marginTop: height * 0.01, // Responsive margin top
    textAlign: 'center',
  },
  subtitle: {
    fontSize: width * 0.04, // Responsive font size
    color: '#333',
    marginBottom: height * 0.03, // Responsive margin bottom
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: height * 0.01, // Responsive margin bottom
  },
  input: {
    width: '100%',
    height: height * 0.07, // Responsive height
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: width * 0.04, // Responsive padding
    backgroundColor: '#FFFFFF', // Mengubah warna latar belakang input menjadi putih
    fontSize: width * 0.04, // Responsive font size
  },
  button: {
    backgroundColor: '#005bac',
    paddingVertical: height * 0.02, // Responsive padding
    borderRadius: 10,
    width: '100%',
    height: ''
    marginTop: height * 0.01, // Responsive margin top
    marginBottom: height * 0.02, // Responsive margin bottom
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: width * 0.05, // Responsive font size
  },
  linkContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: height * 0.01, // Responsive margin vertical
  },
  linkText: {
    color: '#005bac',
    fontSize: width * 0.035, // Responsive font size
    marginVertical: height * 0.005, // Responsive margin vertical
  },
  bottomLogo: {
    width: width * 0.25, // Responsive width
    height: height * 0.05, // Responsive height
    marginBottom: height * 0.02, // Responsive margin bottom
  },
});