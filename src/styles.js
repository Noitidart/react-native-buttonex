// @flow

import { Platform, StyleSheet } from 'react-native'

// ios content blue - #0080FC
// ios header blue - #007AFF also the iOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/

const styles = StyleSheet.create({
    button: Platform.select({
        android: {
            elevation: 4,
            backgroundColor: '#2196F3', // Material design blue from https://material.google.com/style/color.html#color-color-palette
            borderRadius: 2
        }
    }),
    buttonTransparentAndroid: {
        backgroundColor: 'transparent',
        elevation: 0
    },
    buttonBordered: Platform.select({
        ios: {
            borderWidth: 1,
            borderColor: '#007AFF',
            borderRadius: 6,
            overflow: 'hidden' // otherwse backgroundColor messes up borderRadius
        },
        android: {
            elevation: 0,
            borderColor: '#2196F3',
            borderWidth: 1,
            backgroundColor: '#FFFFFF'
        }
    }),
    buttonUnelevatedAndroid: {
        elevation: 0
    },
    text: Platform.select({
        ios: {
            color: '#007AFF', // iOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
            textAlign: 'center',
            padding: 8,
            fontSize: 18
        },
        android: {
            color: '#FFFFFF',
            textAlign: 'center',
            padding: 8,
            fontWeight: '500'
        }
    }),
    textBold:Platform.select({
        ios: {
            fontWeight: '500'
        }
    }),
    textBorderedIOS: {
        paddingVertical: 12 // link81919
    },
    textDefaultColorAndroid: {
        color: '#2196F3'
    },
    buttonDisabled: Platform.select({
        android: {
            elevation: 0,
            backgroundColor: '#DFDFDF'
        }
    }),
    buttonBorderedDisabled: Platform.select({
        ios: {
            borderColor: '#CDCDCD'
        },
        android: {
            borderColor: '#DFDFDF',
            backgroundColor: '#FFFFFF'
        }
    }),
    buttonTransparentDisabledAndroid: {
        backgroundColor: 'transparent'
    },
    textDisabled: Platform.select({
        ios: {
            color: '#CDCDCD'
        },
        android: {
            color: '#A1A1A1'
        }
    }),
    textBorderedActiveIOS: {
        paddingVertical: 12, // link81919
        color: '#FFFFFF'
    },
    buttonBorderedActiveIOS: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#007AFF'
    }
})

export default styles
