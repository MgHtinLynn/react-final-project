import React from "react"
import {useHistory, useParams} from "react-router-dom"
import { useSelector } from "react-redux"
import QuestionResults from "./question.results"
import { isVoted } from "@utils/utils"
import QuestionPoll from "./question.poll"

export default function QuestionDetail() {
  //getting data form redux store with using useSelector
  const history = useHistory()
  const questions = useSelector(state => state.questions)
  const users = useSelector(state => state.users)
  const authedUser = useSelector(state => state.auth)
  const {question_id} = useParams()

  // declare the variable
  const question = questions ? questions[question_id] : null

  if (question === undefined) {
    history.push('/404')
  }
  const author = (users && question) ? users[question.author] : null

  const hasVoted = isVoted(question?.optionOne, authedUser) || isVoted(question?.optionTwo, authedUser)
  console.log('hasVoted', hasVoted)
  return (
    <main className="bg-gray-100 h-screen">
      {
        (question && author) && (
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="max-w-none mx-auto bg-white ">
              <div className="overflow-hidden sm:rounded-lg sm:shadow">
                <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                  <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                    <div className="ml-4 mt-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-12 w-12 rounded-full"
                            src={author.avatarURL}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">

                          {
                            hasVoted ? (
                              <>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Ask by {author?.name}</h3>
                                <h2 className="text-sm text-gray-900 font-semibold">
                                  Results:
                                </h2>
                              </>
                            ) : (
                              <>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">{author?.name} asks:</h3>
                              </>
                            )
                          }

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {
                  hasVoted ? (
                    <QuestionResults/>
                  ) : (
                    <QuestionPoll/>
                  )
                }

              </div>
            </div>
          </div>
        )
      }
    </main>
  )
}
