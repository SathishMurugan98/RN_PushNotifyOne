import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import Home from './Home';
import Login from './Login';
import Setting from './Setting';
import AsyncStorage from '@react-native-community/async-storage';
const Stack = createStackNavigator();
const App = () => {
  const [name, setName] = useState('Login');
  const [loading, setLoading] = useState(true);

  const checking = async () => {
    setLoading(true);
    const storedValue = await AsyncStorage.getItem('login');
    const preList = await JSON.parse(storedValue);
    console.log('-------->prelist----->', preList);
    if (preList != null) {
      console.log('Appp ====>Setting');
      setName('Setting');
    } else {
      console.log('Appp ====>Login');
      setName('Login');
    }
    setLoading(false);
  };
  useEffect(() => {
    checking();
  }, []);
  return (
    <>
      {loading === true ? (
        <View>
          <Text>Checking....</Text>
        </View>
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={name}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Setting" component={Setting} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
