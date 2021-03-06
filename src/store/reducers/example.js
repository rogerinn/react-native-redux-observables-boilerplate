import { createReducer } from '../'

const initialState = { text: null };

export default createReducer(initialState, {
  'CHANGE_TEXT': (state, action) => ({
    ...state,
    text: action.text
  }),
  'GET_GOOGLE_SUCCESS': (state, action) => ({
    ...state,
    status: action.status
  }),
})
