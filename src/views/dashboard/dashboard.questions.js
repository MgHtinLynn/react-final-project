import React from "react"
import DashboardQuestionsPoll from "./dashboard.questions.poll"
import PropTypes from "prop-types"

export default function DashboardQuestions({questions}) {

  return (
    <ul role="list" className="divide-y divide-gray-200">
      {
        (questions && questions) &&
          questions.map((questionId) => (
            <DashboardQuestionsPoll key={questionId} questionId={questionId}/>
          ))
      }
    </ul>
  )
}

DashboardQuestions.propTypes = {
  questions: PropTypes.array.isRequired
}

