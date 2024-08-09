import React from 'react';
import {SafeAreaView} from 'react-native';

import Home from './pages/home/index';
import {AppColor} from './global';

function App(): React.JSX.Element {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1, backgroundColor: AppColor.brand_black}}>
      <Home />
    </SafeAreaView>
  );
}

export default App;
