import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $white: '#fff',
  $inputText: '#363636',
  $primary: '#9477cb',
  $disabled: '#b9b0cb',
});

export default () => <Home />;
