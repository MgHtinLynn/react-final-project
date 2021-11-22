import { ADD_ANSWER, ADD_QUESTION, RECEIVE_QUESTIONS } from "../../actions/questions"

export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_ANSWER:
      return {
        ...state,
        [action.info.qid]: {
          ...state[action.info.qid],
          [action.info.answer]: {
            ...state[action.info.qid][action.info.answer],
            votes: state[action.info.qid][action.info.answer].votes.concat([action.info.authedUser])
          }
        }
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }
    default :
      return state
  }
}
