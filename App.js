import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Fragment} from 'react';
import SubjectsReducer from './src/store/reducers/SubjectsReducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import HomePage from './src/pages/HomePage/HomePage';
import SubjectPage from './src/pages/SubjectPage/SubjectPage';

const Stack = createStackNavigator();

const store = createStore(SubjectsReducer);

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="HomePage"
                component={HomePage}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="SubjectPage"
                component={SubjectPage}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
