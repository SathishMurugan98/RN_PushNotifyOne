import React, {useEffect} from 'react';
import {Button, View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Login = ({navigation}) => {
  const asyncStorage = async () => {
    await AsyncStorage.setItem('login', JSON.stringify({username: 'LoggedIn'}));
    navigation.navigate('Home');
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login</Text>
      <Button title="Store" onPress={() => asyncStorage()} />
    </View>
  );
};

export default Login;
