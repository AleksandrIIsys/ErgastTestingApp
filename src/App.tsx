import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import RootNavigation from './navigations';
import {persistor, store} from './store';


function App(): React.JSX.Element {


  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <SafeAreaView style={{flex: 1}}>
        <RootNavigation />
      </SafeAreaView>
    </PersistGate>
    </Provider>
  );
}


export default App;
