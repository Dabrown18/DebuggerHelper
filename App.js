import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import debuggerHelper from './debuggerHelper';

const App = () => {

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        debuggerHelper.SUCCESS(response.data);
      })
      .catch(e => debuggerHelper.ERROR(`Error: ${e.message}`));
  });

  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;
