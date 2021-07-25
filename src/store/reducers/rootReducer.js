import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore';
// Add firebase to reducers
import noteReducer from './noteReducer';
const rootReducer = combineReducers({
  note: noteReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})

export default rootReducer;