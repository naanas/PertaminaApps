import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Image } from 'react-native';

function TransitionScreen({ navigation }) {
    const opacityValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Mulai animasi perubahan opacity
        Animated.timing(opacityValue, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start();

        // Simulasi loading sebelum pindah ke Dashboard
        const timer = setTimeout(() => {
            navigation.replace('Dashboard');
        }, 2500); // Tunggu 4 detik sebelum mengarahkan ke Dashboard

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../assets/PertaminaLogo.png')} // Ganti dengan path gambar Anda
                style={[styles.logo, { opacity: opacityValue }]}
                resizeMode="contain" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default TransitionScreen;