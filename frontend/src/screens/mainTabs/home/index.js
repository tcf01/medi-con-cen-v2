import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import Record from './components/Record';
import { fetchConsultationRecord } from './api';
import { GlobalContext } from '../../../contexts';
import NewBookingModal from './components/NewBookingModal'
import ACTION from '../../../constants/dispatchActionType';
import { GeneralButton } from '../../../components/atoms/Button'

const HomeScreen = ({ navigation }) => {
  const { globalState, globalDispatch } = React.useContext(GlobalContext)
  const { auth: { userInfo: { clinicName } }, user: { consultationRecords: { data: records } } } = globalState


  const openModal = () => {
    globalDispatch({ type: ACTION.SET_MODAL_OPEN })
  }

  useEffect(() => {
    fetchConsultationRecord(clinicName)
      .then(res => {
        const { records, msg, recordsLength: newRecordsLength } = res

        if (globalState.user.consultationRecords.length !== newRecordsLength) {
          if (!msg) {
            globalDispatch({
              type: ACTION.SET_CONSULTATION_RECORD, payload:
              {
                records,
                length: records.length
              }
            })
          } else {
            globalDispatch({ type: ACTION.SET_ERROR_MSG, payload: msg })
          }
        }
      }, [globalState.user.consultationRecords.length])
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.homepageHeader}>
        <Text style={styles.homepageHeaderText}>Consultation Record</Text>
        <GeneralButton title={'Add Record'}
          onPressHandler={openModal}
          buttonCustomStyle={styles.addRecordButton}
        />
      </View>

      <ScrollView style={styles.recordWrapper}>
        {records.length > 0
          ? records.map(record => {
            return <Record key={`record-${record.id}`} {...record} />
          })
          :
          <Text style={styles.noRecordText}>There is no record yet</Text>
        }
      </ScrollView>

      <NewBookingModal title={"Add Record"} isOpen={globalState.app.isModalOpen} />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
  homepageHeader: {
    width: "100%",
    marginTop: 55,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  homepageHeaderText: {
    fontSize: 25,
  },
  recordWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: 550,
    padding: 20,
  },
  addRecordButton: {
    color: 'green',
    width: "20%"
  },
  noRecordText: {
    textAlign: 'center'
  }
});

export default HomeScreen;


