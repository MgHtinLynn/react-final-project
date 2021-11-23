import React, { useState } from "react"
import { useSelector } from 'react-redux'
import DashboardTabs from "./dashboard.tabs"
import { UNANSWERED_QUESTION } from "@utils/string"
import DashboardQuestions from "./dashboard.questions"

function Dashboard() {
  const authedUser = useSelector(state => state.auth)
  const questions = useSelector(state => state.questions)

  const [currentTab, setCurrentTab] = useState(UNANSWERED_QUESTION)

  const answered = (authedUser && questions) ? Object.keys(questions).filter((qId) => {
    return questions[qId].optionOne.votes.includes(authedUser) || questions[qId].optionTwo.votes.includes(authedUser)
  }).sort((fqId, sqId) => questions[sqId].timestamp - questions[fqId].timestamp) : null

  const unanswered = (authedUser && questions) ? Object.keys(questions).filter((qId) => {
    return !(questions[qId].optionOne.votes.includes(authedUser) || questions[qId].optionTwo.votes.includes(authedUser))
  }).sort((fqId, sqId) => questions[sqId].timestamp - questions[fqId].timestamp) : null

  return (
    <main className="bg-gray-100 h-screen">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="max-w-none mx-auto">
        <div className="bg-white overflow-hidden sm:rounded-lg sm:shadow">

          <div className="bg-white border-b border-gray-200">
            <DashboardTabs setCurrentTab={setCurrentTab}/>
          </div>
          {
            (questions && (answered || unanswered))  && (
              <DashboardQuestions questions={currentTab === UNANSWERED_QUESTION ? unanswered : answered}/>
            )
          }
        </div>
      </div>
    </div>
    </main>
  )
}

export default Dashboard
