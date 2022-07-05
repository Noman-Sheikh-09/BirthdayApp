import React from 'react';
import StackNavigation from './src/navigation/StackNavigation';
import { Provider } from 'react-redux';
import Store from './src/config/Store';
export default function App() {
  
  return(
     <Provider store={Store}>
  <StackNavigation />
  </Provider>
  )}
