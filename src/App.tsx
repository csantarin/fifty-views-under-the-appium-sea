/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import NestedView from './NestedView';

const App = () => {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <NestedView noOfLayers={50}>
                <TouchableOpacity>
                    <Text>Button</Text>
                </TouchableOpacity>
            </NestedView>
        </Fragment>
    );
};

export default App;
