import React from 'react';
import {SafeAreaView} from 'react-native';

import {AppColor} from './global';

import Home from './pages/home/index';
import Box from './pages/box';

function App(): React.JSX.Element {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1, backgroundColor: AppColor.brand_black}}>
      {/* <Box /> */}
      <Home />
    </SafeAreaView>
  );
}

export default App;
