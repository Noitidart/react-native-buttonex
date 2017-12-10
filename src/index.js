// @flow

import React, { Component } from 'react'
import { Animated, Platform, Text, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

import styles from './styles'

type Props = {
    accessibilityLabel?: string, // Text to display for blindness accessibility features
    bold?: boolean, // *(iOS only)* always bold on android, but on iOS default is not bold
    bordered?: boolean,
    // bordered === false: Color of the text (iOS), or background color of the button (Android)
    // bordered === true: Color of the text and border and background on press (iOS), or color of the text and border of the button (Android)
    color?: string,
    disabled?: boolean,
    hasTVPreferredFocus?: boolean, // *(Apple TV only)* TV preferred focus (see documentation for the View component).
    noShadow?: boolean, // *(Android only)* by default it is elevated, if bordered OR disabled are true, then this has no effect as both of these force no shadow
    onPress: () => any,
    testID?: string, // Used to locate this view in end-to-end tests.
    title: string, // Text to display for blindness accessibility features
    transparent?: boolean // *(Android only)* iOS is always transparent. blocks/superceeds "bordered"
}

type State = {
    activeAnim: typeof Animated.Value
}

class Button extends Component<Props, State> {
    state = {
        activeAnim: new Animated.Value(0)
    }

    render() {
        const { accessibilityLabel, bold, bordered, color, disabled, hasTVPreferredFocus, noShadow, onPress, testID, title, transparent } = this.props;
        const { activeAnim } = this.state;

        const isIOS = Platform.OS === 'ios';
        const isAndroid = !isIOS;

        const buttonStyles = [styles.button];
        const textStyles = [styles.text];
        const accessibilityTraits = ['button'];

        if (disabled) {
            accessibilityTraits.push('disabled');
            buttonStyles.push(styles.buttonDisabled);
            textStyles.push(styles.textDisabled);
            if (bordered) {
                buttonStyles.push(styles.buttonBordered, styles.buttonBorderedDisabled);
                if (isIOS) textStyles.push(styles.textBorderedDisabledIOS);
            }
            if (isAndroid) {
                if (transparent) buttonStyles.push(styles.buttonTransparentDisabledAndroid);
            }
        } else {
            if (transparent && isAndroid) {
                buttonStyles.push(styles.buttonTransparentAndroid);
            }
            if (bordered && !(isAndroid && transparent)) {
                buttonStyles.push(styles.buttonBordered);
                if (isIOS) textStyles.push(styles.textBordered); // dont push if isAndroid because textBordered will give it color
            }
            if (color) {
                if (bordered) buttonStyles.push({ borderColor:color });
                if (isIOS || (isAndroid && (transparent || bordered))) textStyles.push({ color });
                else if (!transparent) buttonStyles.push({ backgroundColor:color }); // isAndroid on this line
            } else {
                if (isAndroid && (transparent || bordered)) textStyles.push(styles.textBordered); // textBordered only has color on android
            }
            if (noShadow && isAndroid && !bordered && !transparent) {
                buttonStyles.push(styles.buttonUnelevatedAndroid);
            }
        }

        if (bold && isIOS) {
            textStyles.push(styles.textBold);
        }

        const formattedTitle = isAndroid ? title.toUpperCase() : title;
        const Touchable = isAndroid ? TouchableNativeFeedback : TouchableOpacity;

        if (isIOS && bordered) {
            return (
                <View style={buttonStyles}>
                    <Text style={textStyles} disabled={disabled}>{formattedTitle}</Text>
                    <TouchableWithoutFeedback accessibilityComponentType="button" accessibilityLabel={accessibilityLabel} accessibilityTraits={accessibilityTraits} disabled={disabled} hasTVPreferredFocus={hasTVPreferredFocus} onPress={onPress} onPressIn={this.activateIOS} onPressOut={this.deactivateIOS} testID={testID}>
                        <Animated.View style={[{opacity:activeAnim}, styles.buttonBorderedActiveIOS, color && { backgroundColor:color }]}>
                            <Text style={[styles.text, styles.textBorderedActiveIOS, bold && styles.textBold]}>{formattedTitle}</Text>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
            )
        } else {
            return (
                <Touchable accessibilityComponentType="button" accessibilityLabel={accessibilityLabel} accessibilityTraits={accessibilityTraits} disabled={disabled} hasTVPreferredFocus={hasTVPreferredFocus} onPress={onPress} testID={testID}>
                    <View style={buttonStyles}>
                        <Text style={textStyles} disabled={disabled}>{formattedTitle}</Text>
                    </View>
                </Touchable>
            )
        }
    }

    activateIOS = () => {
        const { activeAnim } = this.state;
        activeAnim.stopAnimation();
        Animated.timing(activeAnim, { toValue:1, duration:200, useNativeDriver:true }).start();
    }
    deactivateIOS = () => {
        const { activeAnim } = this.state;
        activeAnim.stopAnimation();
        Animated.timing(activeAnim, { toValue:0, duration:200, useNativeDriver:true }).start();
    }
}

export default Button
