import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';

interface ConfirmationScreenProps {
  route: {
    params: {
      photo: { uri: string } | null;
      input1: string;
      input2: string;
      input3: string;
    };
  };
}

const ConfirmationScreen: React.FC<ConfirmationScreenProps> = ({ route }) => {
  const { photo, input1, input2, input3 } = route.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Data Berhasil Di Submit</Text>

        {photo && photo.uri ? (
          <Image source={{ uri: photo.uri }} style={styles.photo} resizeMode="contain" />
        ) : (
          <Text style={styles.errorText}>No photo available.</Text>
        )}

        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Deskripsi:</Text>
          <Text style={styles.text}>{input1}</Text>

          <Text style={styles.label}>Lokasi:</Text>
          <Text style={styles.text}>{input2}</Text>

          <Text style={styles.label}>Kategori:</Text>
          <Text style={styles.text}>{input3}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  photo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 20,
  },
  detailsContainer: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
  },
});

export default ConfirmationScreen;