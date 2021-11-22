import React, { useRef } from "react"
import ProgressBar from "../compontents/ProgressBar"
import PropTypes from "prop-types"

export default function QuestionResult({option, totalVote, isVoted}) {
  const progressPercentage = useRef(0)

  if (option) {
    progressPercentage.current = Math.round((option.votes.length * 100) / totalVote)
  }

  return (
      <li>
        <div className={`block hover:bg-gray-50 ${isVoted && 'border bg-green-100 border-green-500'}`}>
          <div className="flex items-center px-4 py-4 sm:px-6">
            <div className="min-w-0 flex-1 flex items-center">
              <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p className="text-sm font-medium text-indigo-600 truncate">Would you rather {option.text}?</p>
                  {
                    isVoted && (
                      <p className="mt-2 flex items-center text-sm text-green-500">
                        Your Vote
                      </p>
                    )
                  }

                </div>
                <div className="hidden md:block">
                  <div>
                    <p className="text-sm text-gray-900 font-semibold">
                      Would you rather
                    </p>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <ProgressBar progressPercentage={progressPercentage.current}/>
                    </div>
                    <p className="mt-2 flex items-center text-sm text-gray-500">
                      {option.votes.length} out of {totalVote} votes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
  )
}

QuestionResult.propTypes = {
  option: PropTypes.object.isRequired,
  totalVote: PropTypes.number.isRequired,
  isVoted: PropTypes.bool.isRequired
}
