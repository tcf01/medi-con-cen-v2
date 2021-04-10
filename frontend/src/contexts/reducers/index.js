import { useReducer } from 'react'

import { appReducer, app } from './appReducer.js'
import { authReducer, auth } from './authReducer.js'
import { userReducer, user } from './userReducer.js'

const initState = { app, auth, user };

const combineReducers = (...reducers) => (prevState, value) =>
reducers.reduce((newState, reducer) => reducer(newState, value), prevState);


const rootReducer = combineReducers(appReducer, authReducer, userReducer)

export const useAppReducer = (state = initState) => useReducer(rootReducer, state)
