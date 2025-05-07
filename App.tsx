import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import TransitionScreen from './src/screens/TransitionScreen';
import pilihanScreen from './src/screens/PilihanScreen';
import SisiLuarShelterScreen from './src/screens/sisiluarshelter';
import ReportScreen from './src/screens/ReportScreen';
import ConfirmationScreen from './src/screens/ConfirmationScreen';
import areadalamshelter from './src/screens/areadalamshelter';
import pilihanScreen1 from './src/screens/pilihanScreen1';
import dindingshelter from './src/screens/dindingshelterScreen';
import pilihanScreen2 from './src/screens/pilihanScreen2';
import sharfas from './src/screens/sharfasScreen';
import pilihanScreen3 from './src/screens/pilihanScreen3';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Transition" component={TransitionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Pilihan" component={pilihanScreen} options={{ title: 'Sisi Luar Shelter' }}/>
        <Stack.Screen name="SisiLuarShelter" component={SisiLuarShelterScreen} options={{ title: 'Sisi Luar Shelter' }} />
        <Stack.Screen name="ReportScreen" component={ReportScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} options={{ title: 'Hasil Data' }}/>
        <Stack.Screen name="areadalamshelter" component={areadalamshelter} options={{ title: 'Area Dalam Shelter' }} />
        <Stack.Screen name="Pilihan1" component={pilihanScreen1} options={{ title: 'Area Dalam Shelter' }}/>
        <Stack.Screen name="dindingshelter" component={dindingshelter} options={{ title: 'Dinding Shelter' }} />
        <Stack.Screen name="Pilihan2" component={pilihanScreen2} options={{ title: 'Dinding Shelter' }}/>
        <Stack.Screen name="sharfas" component={sharfas} options={{ title: 'Sharfas' }} />
        <Stack.Screen name="Pilihan3" component={pilihanScreen3} options={{ title: 'Sharfas' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;