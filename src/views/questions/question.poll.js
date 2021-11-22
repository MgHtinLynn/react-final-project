import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { handleVotingOption } from "../../redux/actions/shared"

export default function QuestionPoll() {
  const [vote, setVote] = useState('')
  const [isDisabled, setDisabled] = useState(true)
  const questions = useSelector(state => state.questions)

  const authedUser = useSelector(state => state.auth)

  const {question_id} = useParams()

  const dispatch = useDispatch()

  // declare the variable
  const question = questions ? questions[question_id] : null

  const submitPoll = async () => {
    dispatch(handleVotingOption({
      authedUser,
      qid: question.id,
      answer: vote
    }))
  }

  const clickRadio = (e) => {
    setVote(e.target.value)
    setDisabled(false)
  }

  return (
    <div className="px-8 py-12 flex justify-center bg-white">
      <div>
        <label className="text-base font-medium text-gray-900">Would You Rather...</label>
        <fieldset className="mt-4">
          <legend className="sr-only">Poll Submit</legend>
          <div className="space-y-4">

              <div className="flex items-center cursor-pointer">
                <input
                  id="optionOne"
                  name="notification-method"
                  type="radio"
                  value="optionOne"
                  onChange={clickRadio}
                  defaultChecked={vote === "optionOne"}
                  className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 cursor-pointer"
                />
                <label htmlFor="optionOne" className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer">
                  {question.optionOne.text}
                </label>
              </div>

            <div className="flex items-center cursor-pointer">
              <input
                id="optionTwo"
                name="notification-method"
                type="radio"
                value="optionTwo"
                onChange={clickRadio}
                defaultChecked={vote === "optionTwo"}
                className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 cursor-pointer"
              />
              <label htmlFor="optionTwo" className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer">
                {question.optionTwo.text}
              </label>
            </div>

            <div className="flex w-full cursor-pointer">
              <button
                disabled={isDisabled}
                onClick={submitPoll}
                type="button"
                className={`${isDisabled && 'cursor-not-allowed '}inline-flex justify-center items-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
              >
                Submit
              </button>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  )
}
