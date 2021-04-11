import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'

import ModalHeader from './Header'
import ModalBody from './Body'

export const GeneralModal = ({ title, children, isOpen }) => {
    return (
        <View /* style={styles.testing} */>
            <Modal visible={isOpen}>
                <View style={styles.modalBg}>
                    <View style={styles.modalContentWrapper}>
                        <ModalHeader title={title} />
                        <ModalBody >
                            {children}
                        </ModalBody>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    testing: {
        width: 50, 
        height: 50,
        padding: 10,
    },
    modalBg: {
        backgroundColor: "rgba(52, 52, 52, 0.4)",
        flex: 1
    },
    modalContentWrapper: {
        padding: 20,
        margin: 50,
        borderRadius: 20,
        flex: 1,
        backgroundColor: "white"
    }
})

