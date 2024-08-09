import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import {styles} from './style';

import {
  accelerometer,
  SensorTypes,
  setUpdateIntervalForType,
} from 'react-native-sensors';

export default function Box(): React.JSX.Element {
  useEffect(() => {
    setUpdateIntervalForType(SensorTypes.accelerometer, 100);
    // 가속도계 센서 구독
    const subscription = accelerometer.subscribe(({x, y, z, timestamp}) => {
      console.log('x, y, z, timestamp: ', x, y, z, timestamp);
    });

    // 구독 해제
    return () => subscription.unsubscribe();
  }, []);

  return <Text>응애에요</Text>;
}
