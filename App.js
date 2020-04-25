import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';

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
  [timer, setTimer] = useState(0);
  [clicked, wasClicked] = useState(false);
  [reset, resetTimer] = useState(false);

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

      if(seconds === 60){
        setSeconds(0)
        setMinutes(minutes + 1)
      }
    }, 1000);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}> Start Your Pomodore Session </Text>
      <TouchableOpacity onPress={ () => handlePress()} style={styles.touchable}>
        <Image
          source={{uri: clicked ? 'https://icons.iconarchive.com/icons/danieledesantis/audio-video-outline/512/pause-icon.png' :  'https://icons.iconarchive.com/icons/danieledesantis/audio-video-outline/512/play-icon.png'}}
          style={{width: 100, height: 100}} />
      </TouchableOpacity>
      <Text style={styles.timer}>{minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}`: seconds}</Text>
      <Button onPress={ () => {setMinutes(0); setSeconds(0);}} title={seconds > 0 && !clicked ? 'Reset' : ''}/>
    </View>
  );
}

const styles = StyleSheet.create({

  button: {
    width: 100,
    height: 100,
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6dc0d5',
    borderRadius: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc2ce',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    width: 220,
  },
  timer: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 40,
    marginTop: 50,
  },
});
