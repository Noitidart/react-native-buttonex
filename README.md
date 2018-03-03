# react-native-buttonex
Short for react-native ButtonExtended. This module is a copy of the default react-native/Button component from here - http://facebook.github.io/react-native/docs/button.html - https://github.com/facebook/react-native/blob/master/Libraries/Components/Button.js - everything works exactly the same. I just added some new props to acheive the various native styles we see on Android and iOS.

### Table of Contents

- [Motivation](#motivation)
- [Usage](#usage)
- [Installation](#installation)
- [Import](#import)
- [Render](#render)
    - [Default Style (Android - Raised Style) (iOS - Text Button Style)](#default-style-android---raised-style-ios---text-button-style)
    - [Bordered Style](#bordered-style)
    - [No Background Style (Android Only)](#no-background-style-android-only)
    - [Flat Style (Android Only)](#flat-style-android-only)
- [Properties](#properties)
- [Demo](#demo)
- [Screenshots / Screencast](#screenshots--screencast)
- [Android](#android)
- [iOS](#ios)
- [Future / To Do](#future--to-do)

### Motivation

This is a great article which inspired me to add these props - https://medium.com/as-a-product-designer/android-vs-ios-compare-20-ui-components-patterns-feaf94533568 - it shows the various button components on Android and iOS.

* Bordered Style
  * iOS has a bordered button as seen in the App Store - https://i.imgur.com/BY4Hdh3.png - and when it is pressed it looks like this - https://i.imgur.com/fEcSMED.png - this is the effect got by creating a `system`/`roundedRect` type `UIButton` - https://developer.apple.com/documentation/uikit/uibuttontype/1624021-system
  * Android also has a bordered button as seen in the Google Play store - https://i.imgur.com/Q4qWbNF.png - we see that there is no shadow on this button.
* Bold Title Label *(iOS Only)*
  * On iOS the font is sometimes bold. For example - https://raw.githubusercontent.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/master/screenshots/screenshot-ios7-share.png - notice the "Post" button is bolded while the "Cancel" button is not.
* Transparent Background Style *(Android only)*
  * In all Android dialogs we see a button with a transparent background and a color for the font. In the default `react-native/Button` component we cannot control the color of the "title". This module fixes that. If you add the `transparent` prop, then the color applies to the "title" color. Example dialog: https://i.imgur.com/JdZmwGK.png
* Flat Style *(Android only)*
  * The Google Play store shows us a flat button style, without a shadow - https://i.imgur.com/Q4qWbNF.png - the default `react-native/Button` always has a shadow. Add this prop to remove that shadow.

## Usage

### Installation

    npm i react-native-buttonex

### Import

    import Button from 'react-native-buttonex'

### Render

All styles accept the properties of `disabled` and/or `loading`. Some properties beheave differently based on the style. This is explained below.

#### Default Style (Android - Raised Style) (iOS - Text Button Style)

    <Button title="Hi" />

* Android Behavior
  * Description - A raised button with a solid background color. In Android, on press it should elevate even more. However this feature is not yet implemented because `useNativeDriver` does not work with `elevation` property yet.
  * Applicable Properties
    * `color` - Changes the color of the background.
    * `black` - Makes the title label black. Useful if the the default color of white is not readable on background color determined by `color`.
* iOS Behavior
  * Applicable Properties
    * `color` - Changes the color of the title label.
    * `bold` - Increase font weight of title to 500.

#### Bordered Style

    <Button title="Hi" bordered />

* Android Behavior
  * Description - Background color defaults to white.
  * Applicable Properties
    * `color` - Changes the color of the title label and border.
    * `noBackground` - Make the background transparent. If this prop is set at same time as `black`, this property takes precedence, and a black backgroudn will not be applied.
    * `black` - Makes the backgrond color of the button black.
* iOS Behavior
  * Description - Background color is transparent. On press, the title label color goes to white, and the background turns into color set by `color`.
  * Applicable Properties
    * `color` - Changes the color of the title label and border. When button is pressed, this becomes the background color.
    * `bold` - Increase font weight of title to 500.

#### No Background Style (Android Only)

    <Button title="Hi" noBackground />

* Behavior
  * Description - Just a text label button with a transparent background.
  * Applicable Properties
    * `color` - Changes the color of the title label.

#### Flat Style (Android Only)

    <Button title="Hi" flat />

* Behavior
  * Description - Same as "raised style" but without the elevation.
  * Applicable Properties
    * `color` - Changes the color of the background.
    * `black` - Makes the title label black. Useful if the the default color of white is not readable on background color determined by `color`.

## Properties

| Prop                                                                             | Type | Default | Required | Description                                                                                                                                           |
|----------------------------------------------------------------------------------|------|---------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| black                                                                            | bool |         |          | *(Android only)* Changes either the title color, border color, or background color, depending on style. See [Usage](#Usage) section above.            |
| bold                                                                             | bool |         |          | *(iOS only)* Makes the font weight heavier.                                                                                                           |
| bordered                                                                         | bool |         |          | Gives the button a border.                                                                                                                            |
| flat                                                                             | bool |         |          | *(Android only)* Removes the shadow which is there by default on Android.                                                                             |
| loading                                                                          | bool |         |          | *(Android only)* Disables `onPress` handler and shows a spinner. I plan to implement this for iOS soon. I haven't found the style guide for this yet. |
| noBackground                                                                     | bool |         |          | *(Android only)* Gives a transparent background color to the button.                                                                                  |
| [...Button.props](http://facebook.github.io/react-native/docs/button.html#props) |      |         |          | All other props of the standard react-native `<Button>` component.                                                                                    |

## Demo
A demo is available as an Expo Snack - https://snack.expo.io/@noitsnack/react-native-buttonex-v2.0

### Screenshots / Screencast

### Android

HD Screencast - https://gfycat.com/IncompatibleConfusedBergerpicard

![GIF](https://thumbs.gfycat.com/IncompatibleConfusedBergerpicard-size_restricted.gif)

### iOS

Bordered button in pressed state - https://github.com/Noitidart/react-native-buttonex/blob/master/screenshots/ios-pressed.jpg?raw=true

![](https://github.com/Noitidart/react-native-buttonex/blob/master/screenshots/ios.jpg?raw=true)

## Future / To Do

* [ ] iOS font size "small" and "medium" and current (18) should be "default" which is largest, discuss with designers out there
  * [ ] Small size on iOS (small-bordered is used in App store)
    * https://images.techhive.com/images/article/2015/10/2fa_invitation_screen_ios-100619137-large.png
  * [ ] Maybe medium size on iOS I think this is used in headers
* [ ] Android only - for raised button, option to animate/elevate more on press prop - not yet implemented as `useNativeDriver` doesn't work with `elevation` yet (default button on android is elevated, and pressing elevates it more && the ripple here is different, on press it elevates but doesnt start ripple until onPressOut, onPressIn it also gets a tinge darker - default is #d6d7d7 but when pressed it goes to #c9caca)
* loading state
  * [x] Android (android has no morph antimation) (available in v2)
  * [ ] iOS
* [ ] Android - the ripple is not respecting border radius of 2, i think this is bug on RN side though
* [ ] Android - check what the ripple color should be for the various forms
