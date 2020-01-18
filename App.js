import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

import Routes from './src/routes';

export default () => 
<>
  <StatusBar barStyle="light-content" backgroundColor="#7D47E0" />
  <Routes />
</>