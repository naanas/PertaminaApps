import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { launchCamera } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

const ReportScreen = () => {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState(null);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    // Memeriksa apakah semua field sudah diisi
    setIsSubmitDisabled(!(photo && input1 && input2 && input3));
  }, [photo, input1, input2, input3]);

  const handleTakePhoto = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.7,
      includeBase64: false,
    };

    launchCamera(options, (response) => {
      // Cek apakah terdapat kesalahan yang terjadi saat mengambil gambar
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // Pastikan response.assets ada dan memiliki panjang yang lebih dari 0
        if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;

          // Validasi URI gambar
          if (uri) {
            setPhoto({ uri });
          } else {
            Alert.alert("Error", "Photo URI is invalid.");
          }
        } else {
          Alert.alert("Error", "No image was returned.");
        }
      }
    });
  };

  const handleSubmit = () => {
    if (photo) {
      navigation.navigate('ConfirmationScreen', { photo, input1, input2, input3 });
    } else {
      Alert.alert("Error", "Please take a photo before submitting.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />

      <View style={styles.headerContainer}>
        <LinearGradient
          colors={['rgba(0, 131, 238, 0.9)', 'rgba(62, 167, 253, 0.6)', 'transparent']}
          style={styles.header}
        >
          <Text style={styles.greeting}>Report Screen</Text>
        </LinearGradient>
      </View>

      <ScrollView style={styles.content}>
        <TouchableOpacity style={styles.photoButton} onPress={handleTakePhoto}>
          {photo ? (
            <Image source={photo} style={styles.photo} resizeMode="cover" />
          ) : (
            <Text style={styles.photoButtonText}>Take Photo</Text>
          )}
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Deskripsi"
          placeholderTextColor="#888"
          value={input1}
          onChangeText={setInput1}
        />
        <TextInput
          style={styles.input}
          placeholder="Lokasi"
          placeholderTextColor="#888"
          value={input2}
          onChangeText={setInput2}
        />
        <TextInput
          style={styles.input}
          placeholder="Kategori"
          placeholderTextColor="#888"
          value={input3}
          onChangeText={setInput3}
        />

        <TouchableOpacity
          style={[styles.submitButton, isSubmitDisabled && styles.submitButtonDisabled]}
          onPress={handleSubmit}
          disabled={isSubmitDisabled}
        >
          <Text style={styles.submitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4572e',
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    width: '100%'
  },
  header: {
    padding: 20,
    paddingTop: 30,
    backgroundColor: 'transparent',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    marginTop: 110, // Tinggi header
    padding: 20,
  },
  greeting: {
    marginTop:30,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  photoButton: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    height: 300,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  photoButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#0d4a85',
    borderRadius: 10,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButtonDisabled: {
    backgroundColor: '#eee',
    opacity: 0.5,
  },
});

export default ReportScreen;