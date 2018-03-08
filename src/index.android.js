// @flow

import React, { Component } from 'react'
import { ActivityIndicator, Animated, Text, TouchableNativeFeedback, View } from 'react-native'

import styles, { BLACK, DEFAULT_COLOR, PRIMARY_DISABLED_COLOR, SECONDARY_DISABLED_COLOR, WHITE } from './styles'

type Props = {
    accessibilityLabel?: string, // Text to display for blindness accessibility features
    animated?: boolean,
    black?: boolean,
    bordered?: boolean,
    color?: string,
    disabled?: boolean,
    flat?: boolean,
    loading?: boolean,
    noBackground?: boolean,
    onPress: () => any, // if either "loading" and/or "disabled" are true, then onPress will not trigger
    testID?: string, // Used to locate this view in end-to-end tests.
    title: string // Text to display for blindness accessibility features
}

type State = {
    raisedElevation: typeof Animated.Value
}

class Button extends Component<Props, State> {
    state = {
        raisedElevation: new Animated.Value(2)
    }

    render() {
        const { accessibilityLabel, animated, black, bordered, color, disabled, flat, loading, noBackground, onPress, testID, title } = this.props;
        const { raisedElevation } = this.state;

        const formattedTitle = title.toUpperCase();

        const accessibilityTraits = ['button'];
        if (disabled) accessibilityTraits.push('disabled');

        let buttonStyle, textStyle, activityColor;
        if (flat) {
            // is flat

            // set buttonStyle
            if (disabled) {
                buttonStyle = styles.buttonFlatDisabled;
            } else {
                buttonStyle = styles.buttonFlat;
                if (color) buttonStyle = [buttonStyle, { backgroundColor:color }];
            }

            // set textStyle
            if (loading) {
                textStyle = styles.textTransparent;
            } else {
                if (disabled) textStyle = styles.textDisabled;
                else textStyle = black ? styles.textBlack : styles.text;
            }

            // set activityColor
            if (loading) {
                if (disabled) activityColor = PRIMARY_DISABLED_COLOR;
                else activityColor = black ? BLACK : WHITE;
            }

        } else if (bordered) {
            // is bordered

            // set buttonStyle
            if (disabled) {
                buttonStyle = styles.buttonBorderedDisabled;
                if (noBackground) buttonStyle = [buttonStyle, styles.backgroundTransparent];
                else if (black) buttonStyle = [buttonStyle, styles.backgroundBlack];
            } else {
                buttonStyle = [styles.buttonBordered];
                if (color) buttonStyle.push({ borderColor:color });

                if (noBackground) buttonStyle.push(styles.backgroundTransparent);
                else if (black) buttonStyle.push(styles.backgroundBlack);
            }

            // set textStyle
            if (loading) {
                textStyle = styles.textTransparent;
            } else {
                if (disabled) {
                    textStyle = styles.textDisabled;
                } else {
                    if (color) textStyle = [styles.text, { color }];
                    else textStyle = styles.textDefaultColor;
                }
            }

            // set activityColor
            if (loading) {
                if (disabled) {
                    activityColor = PRIMARY_DISABLED_COLOR;
                } else {
                    if (color) activityColor = color;
                    else activityColor = DEFAULT_COLOR;
                }
            }

        } else if (noBackground) {
            // is text button

            // set buttonStyle
            buttonStyle = styles.buttonText;

            // set textStyle
            if (loading) {
                textStyle = styles.textTransparent;
            } else {
                if (disabled) {
                    textStyle = styles.textDisabled;
                } else {
                    if (color) textStyle = [styles.text, { color }];
                    else textStyle = styles.textDefaultColor;
                }
            }

            // set activityColor
            if (loading) {
                if (disabled) {
                    activityColor = PRIMARY_DISABLED_COLOR;
                } else {
                    if (color) activityColor = color;
                    else activityColor = DEFAULT_COLOR;
                }
            }

        } else {
            // is raised

            // set buttonStyle
            if (disabled) {
                buttonStyle = styles.buttonRaisedDisabled;
            } else {
                buttonStyle = styles.buttonRaised;
                if (color) buttonStyle = [buttonStyle, { backgroundColor:color }];
            }

            // set textStyle
            if (loading) {
                textStyle = styles.textTransparent;
            } else {
                if (disabled) textStyle = styles.textDisabled;
                else textStyle = black ? styles.textBlack : styles.text;
            }

            // set activityColor
            if (loading) {
                if (disabled) activityColor = PRIMARY_DISABLED_COLOR;
                else activityColor = black ? BLACK : WHITE;
            }

            if (animated) {
                // button is elevation 6 when pressed per - https://material.io/guidelines/material-design/elevation-shadows.html#elevation-shadows-elevation-android
                return (
                    <TouchableNativeFeedback accessibilityComponentType="button" accessibilityLabel={accessibilityLabel} accessibilityTraits={accessibilityTraits} disabled={disabled || loading} onPress={onPress} onPressIn={this.raiseButton} onPressOut={this.dropButton} testID={testID}>
                        <Animated.View style={[buttonStyle, { elevation:raisedElevation }]}>
                            <Text style={textStyle} disabled={disabled || loading}>{formattedTitle}</Text>
                            { loading && <ActivityIndicator style={styles.activity} color={activityColor} size="small" /> }
                        </Animated.View>
                    </TouchableNativeFeedback>
                )
            }

        }

        return (
            <TouchableNativeFeedback accessibilityComponentType="button" accessibilityLabel={accessibilityLabel} accessibilityTraits={accessibilityTraits} disabled={disabled || loading} onPress={onPress} testID={testID}>
                <View style={buttonStyle}>
                    <Text style={textStyle} disabled={disabled || loading}>{formattedTitle}</Text>
                    { loading && <ActivityIndicator style={styles.activity} color={activityColor} size="small" /> }
                </View>
            </TouchableNativeFeedback>
        )

    }

    raiseButton = () => Animated.timing(this.state.raisedElevation, { toValue:6, duration:100 }).start();
    dropButton = () => Animated.timing(this.state.raisedElevation, { toValue:2, duration:100 }).start();
}

export default Button
