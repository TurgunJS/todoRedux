import * as actions from './actionTypes';

const initialState = {
  questions: [],
  questionLoading: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.QUESTION_ADD:
      return {
        ...state,
        questions: [...state.questions, action.payload]
      };
    case actions.QUESTION_REMOVE:
      return {
        ...state,
        questions: state.questions.filter(q => action.payload.id !== q.id)
      };
    default:
      return state;
  }
}