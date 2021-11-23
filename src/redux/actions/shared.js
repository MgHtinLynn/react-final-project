import { getInitialData, saveQuestionAnswer, saveQuestion } from '@utils/api'
import { receiveUsers } from './user'
import { receiveQuestions, ADD_ANSWER, ADD_QUESTION } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'

//const AUTHED_ID = 'tylermcginnis'

function addAnswerActionCreator(info) {
  return {
    type: ADD_ANSWER,
    info
  }
}

function saveQuestionActionCreator(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}


export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(hideLoading())
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
      })
  }
}

export function handleSaveQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestion(question)
      .then((formattedQuestion) => {
        dispatch(saveQuestionActionCreator(formattedQuestion))
        dispatch(hideLoading())
      })
      .catch(e => {
        console.log('error handleSaveQuestion', e.message)
        alert('Error: Fail to create new question')
      })
  }
}

export function handleVotingOption(info) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestionAnswer(info)
      .then(() => {
        dispatch(addAnswerActionCreator(info))
        dispatch(hideLoading())
      })
      .catch(e => {
        console.log('error handleVotingOption', e.message)
        alert('Error: Fail to vote the poll.')
      })
  }
}
