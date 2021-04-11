import React from 'react'
import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native'

// const totalWidth = Dimensions.get("window").width
// const totalHeight = Dimensions.get("window").height

const Record = (props) => {
    const { clinicName,
        doctorName,
        patientName,
        diagnosis,
        medication,
        consultationFee,
        hasFollowUp,
        date,
        time } = props

    return (
        <View style={styles.wrapper}>
            <View style={styles.clinicInfoWrapper}>
                <View style={styles.clinicInfo}>
                    <Text style={styles.clinicName}>{clinicName}</Text>
                    <Text style={styles.doctorName}>{doctorName} doctor</Text>
                </View>
                <View style={styles.bookingDateTime}>
                    <Text style={styles.bookingDate}>{date}</Text>
                    <Text style={styles.bookingTime}>{time}</Text>
                </View>
            </View>

            <View style={styles.patientInfoWrapper}>
                <View style={styles.patientInfo}>
                    <Text>Patient's name: {patientName}</Text>
                    <Text>Diagnosis: {diagnosis}</Text>
                    <Text>Medication: {medication}</Text>
                </View>
            </View>

            <View style={styles.followUpInfoWrapper}>
                <View style={styles.followUpInfo}>
                    <Text>Need to follow up: {hasFollowUp === 1 ? "YES" : "NO"}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        padding: 30,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: "white",
        shadowColor: '#343a40',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.55,
        borderRadius: 10,
    },
    clinicInfoWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: "flex-start",
        width: 100,
        marginBottom: 20,
        width: "100%"
    },
    clinicInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "flex-end",
    },
    clinicName: {
        fontSize: 25,
        marginRight: 4,
        color: "#222",
    },
    doctorName: {
        fontSize: 14
    },
    bookingDateTime: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    patientInfoWrapper: {
        marginBottom: 20,
    }
})

export default Record
