import React, {useEffect} from 'react';
import {View} from 'react-native';

// import {styles} from './style';

import {
  accelerometer,
  SensorTypes,
  setUpdateIntervalForType,
} from 'react-native-sensors';
import {AppColor} from '../../global';

export default function Box(): React.JSX.Element {
  const [punched, setPunched] = React.useState(false);

  useEffect(() => {
    setUpdateIntervalForType(SensorTypes.accelerometer, 50);
    // 가속도계 센서 구독
    const subscription = accelerometer.subscribe(({x, y, z, timestamp}) => {
      if (x > 2) {
        setPunched(true);
      } else if (punched) {
        setPunched(false);
      }

      console.log('x, y, z, timestamp: ', x, y, z, timestamp, punched);
    });

    // 구독 해제
    return () => subscription.unsubscribe();
  }, [punched]);

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        backgroundColor: punched ? AppColor.brand : AppColor.brand_black,
      }}
    />
  );
}
