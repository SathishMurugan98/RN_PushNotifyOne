import React, {useEffect} from 'react';
import {Button, View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const Setting = ({navigation}) => {
  const loginPage = async () => {
    await AsyncStorage.removeItem('login');
    console.log('Removinggggg====>');
    navigation.navigate('Login');
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Setting=== </Text>
      <Button title="Remove" onPress={() => loginPage()} />
    </View>
  );
};

export default Setting;
