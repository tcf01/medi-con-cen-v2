import { useReducer } from 'react'

import appReducer from './appReducer.js'
import authReducer from './authReducer.js'
import userReducer from './userReducer.js'


const initState = {}

const combineReducers = (...reducers) => (prevState, value) =>
    reducers.reduce((newState, reducer) => reducer(newState, value), prevState);


const rootReducer = combineReducers(appReducer, authReducer, userReducer)

export const useAppReducer = (state = initState) => useReducer(rootReducer, state)