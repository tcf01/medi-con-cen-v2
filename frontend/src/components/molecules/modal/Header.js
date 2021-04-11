import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import ACTION from '../../../constants/dispatchActionType'

import { GlobalContext } from '../../../contexts'

const Header = ({ title = "default header" }) => {
    const { globalState, globalDispatch } = React.useContext(GlobalContext)

    const handleCloseModal = () => {
        globalDispatch({ type: ACTION.SET_MODAL_CLOSE })
    }

    return (
        <View style={styles.modalHeaderWrapper}>
            <View>
                <Text style={styles.modalHeaderText}>{title}</Text>
            </View>
            <View>
                <Icon
                    name="close"
                    onPress={handleCloseModal}
                    size={20}
                />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    modalHeaderWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 30
    },
    modalHeaderText: {
        fontSize: 30
    }
})

export default Header;