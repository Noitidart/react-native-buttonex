// @flow

import { Platform, StyleSheet } from 'react-native'

const BLUE = '#2196F3'; // 500 blue - https://material.io/guidelines/style/color.html#color-color-palette
const WHITE = '#FFFFFF';
const BLACK = '#000000';
const PRIMARY_DISABLED_COLOR = '#A1A1A1';
const SECONDARY_DISABLED_COLOR = '#DFDFDF';
const DEFAULT_COLOR = BLUE;

const baseButton = {
    borderRadius: 2,
    // needed for loading
    justifyContent: 'center',
    alignItems: 'center'
}

const text = {
    textAlign: 'center',
    padding: 8,
    fontWeight: '500',
    color: WHITE
}

const buttonRaised = {
    ...baseButton,
    elevation: 4,
    backgroundColor: DEFAULT_COLOR,
}

const buttonFlat = {
    ...baseButton,
    backgroundColor: DEFAULT_COLOR,
}

const buttonBordered = {
    ...baseButton,
    borderColor: DEFAULT_COLOR,
    borderWidth: 1, // StyleSheet.hairlineWidth,
    backgroundColor: WHITE
}
const buttonBorderedDisabled = {
    ...buttonBordered,
    borderColor: SECONDARY_DISABLED_COLOR
}

const styles = StyleSheet.create({
    buttonText: {
        ...baseButton,
        backgroundColor: 'transparent'
    },

    buttonFlat,
    buttonFlatDisabled: {
        ...buttonFlat,
        backgroundColor: SECONDARY_DISABLED_COLOR
    },

    buttonBordered,
    buttonBorderedDisabled: {
        ...buttonBordered,
        borderColor: PRIMARY_DISABLED_COLOR
    },
    backgroundBlack: {
        backgroundColor: BLACK
    },
    backgroundTransparent: {
        backgroundColor: 'transparent'
    },

    buttonRaised,
    buttonRaisedDisabled: {
        ...buttonRaised,
        elevation: 0,
        backgroundColor: SECONDARY_DISABLED_COLOR
    },


    text,
    textDefaultColor: {
        ...text,
        color: DEFAULT_COLOR
    },
    textBlack: {
        ...text,
        color: BLACK
    },
    textDisabled: {
        ...text,
        color: PRIMARY_DISABLED_COLOR
    },
    textTransparent: {
        ...text,
        color: 'transparent'
    },

    activity: {
        position: 'absolute'
    }
})

export { BLACK, DEFAULT_COLOR, PRIMARY_DISABLED_COLOR, SECONDARY_DISABLED_COLOR, WHITE }
export default styles
