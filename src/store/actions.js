import * as actions from './actionTypes';

export const addQuestion = question => ({
  type: actions.QUESTION_ADD,
  payload: question
});

export const removeQuestion = id => ({
  type: actions.QUESTION_REMOVE,
  payload: { id }
});
