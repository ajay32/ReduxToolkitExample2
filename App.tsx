import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Notes from './Notes/Notes';
import {Provider} from 'react-redux';
import {store} from './redux/reduxwithts/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Notes />
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
