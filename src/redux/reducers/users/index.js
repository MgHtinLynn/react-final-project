import {RECEIVE_USERS} from "../../actions/user"
import {ADD_QUESTION, ADD_ANSWER} from '../../actions/questions'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_ANSWER :
      return {
        ...state,
        [action.info.authedUser]: {
          ...state[action.info.authedUser],
          answers: {
            ...state[action.info.authedUser].answers,
            [action.info.qid]: action.info.answer
          }
        }
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([action.question.id])
        }
      }
    default :
      return state
  }
}
