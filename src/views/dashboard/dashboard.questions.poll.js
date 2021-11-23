import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { QuestionMarkCircleIcon } from "@heroicons/react/solid"
import PropTypes from "prop-types"

export default function DashboardQuestionsPoll({questionId}) {
  const history = useHistory()
  //getting data form redux store with using useSelector
  const questions = useSelector(state => state.questions)
  const users = useSelector(state => state.users)

  // declare the variable
  const question = questions ? questions[questionId] : null
  const author = users ? users[question.author] : null

  const { optionOne, optionTwo } = question

  const optionOneText = optionOne.text.split(' ')
  const optionTwoText = optionTwo.text.split(' ')

  const getQuestionPrefix = () => {
    let filter = true
    const questionPrefix = optionOneText.filter((text, id) => {
      if (filter) {
        if (text === optionTwoText[id]) return true

        filter = false
      }
      return filter
    })

    if (questionPrefix.length === 0) {
      return optionOne.text
    }
    return questionPrefix.join(" ")
  }

  return (
    <>
      {
        (question && author) && (
          <li>
            <div className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full" src={author.avatarURL} alt=""/>
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p className="text-sm font-medium text-indigo-600 truncate">{author.name}</p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <QuestionMarkCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                        <span className="truncate">Ask:</span>
                      </p>
                    </div>
                    <div className="hidden md:block">
                      <div>
                        <p className="text-sm text-gray-900 font-semibold">
                          Would you rather
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          ...{ getQuestionPrefix() }...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button type="button" onClick={() => history.push(`/questions/${question.id}`)}
                    className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    View poll
                  </button>
                </div>
              </div>
            </div>
          </li>
        )
      }
    </>
  )
}

DashboardQuestionsPoll.propTypes = {
  questionId: PropTypes.string.isRequired
}
