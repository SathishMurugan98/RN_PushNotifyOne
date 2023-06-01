import React, {useEffect, useState} from 'react';
import {Button, View, Text} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const Home = ({navigation}) => {
  const [seconds, setSeconds] = useState(0);
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setSeconds(seconds + 1);
  //       console.log('+++++++', seconds);
  //     }, 3000);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home======={seconds}</Text>
      <Button
        title="Go to Setting"
        onPress={() => navigation.navigate('Setting')}
      />
    </View>
  );
};

export default Home;
