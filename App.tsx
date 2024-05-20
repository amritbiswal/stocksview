import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StockList from './src/components/StockList';
import StockDetail from './src/components/StockDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StockList">
        <Stack.Screen name="StockList" component={StockList} />
        <Stack.Screen name="StockDetail" component={StockDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;