import { StyleSheet, Text } from 'react-native'
import React, { memo } from 'react'
import { COLOR, TEXT_STYLE } from '../../../data/StyleGuides'

const Label = ({ children, style, color = COLOR.white }) => {
    return (
        <Text
            allowFontScaling={false}
            style={[styles.textStyle, { color }, style]}
        >
            {children}
        </Text>
    )
}

export default memo(Label)

const styles = StyleSheet.create({
    textStyle: {
        ...TEXT_STYLE.text,
    },
})