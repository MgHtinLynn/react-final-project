import React from "react"
import QuestionResult from "./question.result"
import { isVoted } from "@utils/utils"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"


export default function QuestionResults() {

  const questions = useSelector(state => state.questions)
  //const users = useSelector(state => state.users)
  const authedUser = useSelector(state => state.auth)

  const {question_id} = useParams()

  // declare the variable
  const question = questions ? questions[question_id] : null

  const totalVote = question.optionOne.votes.length + question.optionTwo.votes.length

  return (
    <>
      {
        (question && authedUser) && (
          <ul role="list" className="divide-y divide-gray-200">
            <QuestionResult option={question.optionOne} totalVote={totalVote} isVoted={isVoted(question.optionOne, authedUser)}/>
            <QuestionResult option={question.optionTwo} totalVote={totalVote} isVoted={isVoted(question.optionTwo, authedUser)}/>
          </ul>
        )
      }
    </>
  )
}
