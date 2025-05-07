import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={styles.headerContainer}>
        <LinearGradient
          colors={[
            'rgba(0, 131, 238, 0.9)',
            'rgba(62, 167, 253, 0.6)',
            'transparent',
          ]}
          style={styles.header}
        ></LinearGradient>
      </View>

      <ScrollView style={styles.content}>
        {/* Card Section */}
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>Sharfas</Text>
          <Text style={styles.sectionTitle}>CARA MELAKUKAN</Text>
          <Text style={styles.cardDescription}>
          Bersihkan dengan sapu, kemoceng,
cairan cleaner & majun
          </Text>
          <Text style={styles.sectionTitle}>STANDARD</Text>
          <Text style={styles.cardDescription}>Semua peralatan kerja pada tempatnya &
          tidak ada sampah</Text>
        </View>

        {/* Next Button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('Pilihan3')}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav navigation={navigation} />
    </SafeAreaView>
  );
};

const BottomNav = ({ navigation }) => {
  return (
    <View style={styles.bottomNavContainer}>
      <View style={styles.bottomNav}>
        <NavItem
          iconSource={require('../assets/home.png')}
          text="Home"
          active={true}
          onPress={() => navigation.navigate('Dashboard')}
        />
        <NavItem
          iconSource={require('../assets/message.png')}
          text="Messages"
          active={false}
        />
        {/* <NavItem iconSource={require('../assets/home.png')} text="Bookmark" active={false} /> */}
        <NavItem
          iconSource={require('../assets/profile.png')}
          text="Profile"
          active={false}
        />
      </View>
    </View>
  );
};

const NavItem = ({ iconSource, text, active, onPress }) => {
  const buttonStyle = styles.navItem;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Image source={iconSource} style={styles.navItemIcon} />
      <Text style={styles.navItemText}>{text}</Text>
    </TouchableOpacity>
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
  },
  header: {
    padding: 20,
    paddingTop: 30,
    backgroundColor: 'transparent',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  content: {
    marginTop: 110, // Tinggi header
    padding: 20,
  },
  time: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  greeting: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  nextButton: {
    backgroundColor: '#0d4a85',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 80,
  },
  navItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navItemText: {
    color: 'black',
    fontSize: 10,
    marginTop: 5,
    textAlign: 'center',
  },
  navItemIcon: {
    width: 30,
    height: 30,
    tintColor: 'black',
  },
});

export default App;