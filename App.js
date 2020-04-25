import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

let time = {
  hours: 0,
  minutes: 0,
  seconds: 0
}

export default function App() {
  [timer, setTimer] = useState(time.seconds);
  [clicked, wasClicked] = useState(false);

  [seconds, setSeconds] = useState(0);
  [minutes, setMinutes] = useState(0);
  // [seconds, setSeconds] = useState(0)

  useEffect(() => {
    clicked ? _startTimer() : null

  })

  const handlePress = () =>  {

    wasClicked(!clicked)

  }

  const _startTimer = () => {
    setTimeout(() => {

      setSeconds(seconds+1)
      // time.seconds = timer;
    }, 1000);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Timer: </Text>
      {/*<Text style={styles.instructions}>{timer}</Text>*/}
      <Text style={styles.instructions}>{minutes} : {seconds}</Text>
      {/*<Text style={styles.instructions}></Text>*/}
      <Button onPress={ () => handlePress()} title={clicked ? 'Pause' : 'Start Timer'}/>
      <Text style={styles.instructions}>{instructions}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
