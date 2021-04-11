
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../../styles';

export const GeneralButton = ({ title, onPressHandler, isDisable, ...props }) => {
    const { commonLayout } = React.useContext(ThemeContext)
    const { buttonCustomStyle, textCustomStyle } = props

    return (
        <TouchableOpacity
            style={[commonLayout.button, buttonCustomStyle ? buttonCustomStyle : null, isDisable && styles.appButtonDisabled
            ].filter(Boolean)}
            disabled={isDisable}
            onPress={onPressHandler}
            {...props}

        >
            <Text
                style={[commonLayout.text, textCustomStyle ? textCustomStyle : null].filter(Boolean)} >{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    appButtonDisabled: {
        backgroundColor: "#666"
    }
})