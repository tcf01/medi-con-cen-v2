import React from 'react'
import { ScrollView, View } from 'react-native'


const Body = ({ children }) => {
    return (
        <ScrollView>
            {children}
        </ScrollView>
    )
}

export default Body;