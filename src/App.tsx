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
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { noOfLayers } from '../data.json';
import NestedView from './NestedView';

const App = () => {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}
                >
                    <StatusBar barStyle="dark-content" />
                    <NestedView
                        noOfLayers={noOfLayers}
                        style={styles.nestedView}
                    >
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Button</Text>
                        </TouchableOpacity>
                    </NestedView>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    nestedView: {
        padding: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 24,
        paddingHorizontal: 16,
        paddingTop: 8,
        borderRadius: 12,
        backgroundColor: 'rgba(30,186,186,1)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'rgba(255,255,255,1)',
    },
});

export default App;
