# react-native-buttonex
Short for react-native ButtonExtended. This module is a copy of the default react-native/Button component from here - http://facebook.github.io/react-native/docs/button.html - https://github.com/facebook/react-native/blob/master/Libraries/Components/Button.js - everything works exactly the same. I just added four new props: `bordered`, `transparent`, `bold`, and `noShadow`. The motivation here was to acheive the native styles we see on Android and iOS.

### `bordered`

* iOS has a bordered button as seen here - https://i.imgur.com/BY4Hdh3.png - and when it is pressed it looks like this - https://i.imgur.com/fEcSMED.png - this can be acheived by simply adding the `bordered` prop.
* Android also has a bordered button as seen in the Google Play store - https://i.imgur.com/Q4qWbNF.png - we see that there is no shadow on this button.

### `bold` *(iOS Only)*

* On iOS the font is sometimes bold. For example - https://raw.githubusercontent.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/master/screenshots/screenshot-ios7-share.png - notice the "Post" button is bolded while the "Cancel" button is not.

### `transparent` *(Android only)*

* In all Android dialogs we see a button with a transparent background and a color for the font. In the default `react-native/Button` component we cannot control the color of the "title". This module fixes that. If you add the `transparent` prop, then the color applies to the "title" color. Example of native button that looks like this - https://i.imgur.com/JdZmwGK.png

### `noShadow` *(Android only)*

* The Google Play store shows us a flat button style, without a shadow - https://i.imgur.com/Q4qWbNF.png - the default `react-native/Button` always has a shadow. Add this prop to remove that shadow.

## Usage

### Installation

    npm install --save react-native-buttonex

### Import

    import Button from 'react-native-buttonex';

### Render

    <Button title="Hi" />

## Properties

| Prop                | Type                                                             | Default | Required | Description                                                                                                                                                            |
|---------------------|------------------------------------------------------------------|---------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| accessibilityLabel  | string                                                           |         |          | Text to display for blindness accessibility features.                                                                                                                  |
| bold                | bool                                                             |         |          | *(iOS only)* Makes the font weight heavier.                                                                                                                            |
| bordered            | bool                                                             |         |          | Makes the button of a border. Makes `color` prop affect font and border color.                                                                                         |
| color               | [color](http://facebook.github.io/react-native/docs/colors.html) |         |          | Color of the text (iOS), or background color of the button (Android). If `bordered` then color of text and border. If `transparent` (Android only) then color of text. |
| disabled            | bool                                                             |         |          | If true, disable all interactions for this component.                                                                                                                  |
| hasTVPreferredFocus | bool                                                             |         |          | *(Apple TV only)* TV preferred focus (see documentation for the View component).                                                                                       |
| noShadow            | bool                                                             |         |          | *(Android only)* Removes the shadow which is there by default on Android.                                                                                              |
| onPress             | function                                                         |         | Yes      | Handler to be called when the user taps the button.                                                                                                                    |
| testID              | string                                                           |         |          | Used to locate this view in end-to-end tests.                                                                                                                          |
| title               | string                                                           |         | Yes      | Text to display inside the button.                                                                                                                                     |
| transparent         | bool                                                             |         |          | *(Android only)* Makes the button have no background. Makes `color` prop affect font color.                                                                            |

## Demo
A demo is available as an Expo Snack - https://snack.expo.io/@noitsnack/react-native-buttonex

Here is the code for this demo:

```
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Button from 'react-native-buttonex' // 1.0.2

export default class App extends Component {
    render() {
        return (
            <View style={styles.column}>
                <Text>Current/default implementation of react-native/Button</Text>
                <View style={styles.row}>
                    <Button title="Cancel" color="red" />
                    <Button title="Cancel" color="red" disabled />
                </View>
                <Text>`bordered` - makes `color` affect font and border. The background is always white on Android and always transparent on iOS. (Android - do not set `transparent` prop as this will override `bordered`)</Text>
                <View style={styles.row}>
                    <Button title="Cancel" color="red" bordered />
                    <Button title="Cancel" color="red" bordered disabled />
                </View>
                <Text>(Android only)`transparent` - makes `color` affect font and removes background</Text>
                <View style={styles.row}>
                    <Button title="Cancel" color="red" transparent />
                    <Button title="Cancel" color="red" transparent disabled />
                </View>
                <Text>(Android only) `noShadow` - default &lt;Button&gt; on Anroid has a shadow, this removes it. </Text>
                <View style={styles.row}>
                    <Button title="Cancel" color="red" noShadow />
                    <Button title="Cancel" color="red" noShadow disabled />
                </View>
                <Text>(iOS only) `bold` - Makes the title font thicker</Text>
                <View style={styles.row}>
                    <Button title="Cancel" color="red" bold />
                    <Button title="Cancel" color="red" bold disabled />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center'
    },
    column: {
        flex: 1,
        backgroundColor: 'white',
        padding: 50,
        justifyContent: 'space-between'
    }
})
```

### Screenshots

#### Android

![](https://github.com/Noitidart/react-native-buttonex/blob/master/screenshots/android.png?raw=true)

#### iOS

Bordered button in pressed state - https://github.com/Noitidart/react-native-buttonex/blob/master/screenshots/ios-pressed.jpg?raw=true

![](https://github.com/Noitidart/react-native-buttonex/blob/master/screenshots/ios.jpg?raw=true)
