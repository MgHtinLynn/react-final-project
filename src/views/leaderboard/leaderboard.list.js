import React from 'react'
import { QuestionMarkCircleIcon } from "@heroicons/react/outline"
import { BookOpenIcon } from "@heroicons/react/solid"
import PropTypes from 'prop-types'

export default function LeaderboardList({user}) {

  return (
    <>
      {
        user && (
          <li>
            <div className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full" src={user.avatarURL} alt=""/>
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p className="text-sm font-medium text-indigo-600 truncate">{user.name}</p>
                      <p className="mt-2 flex items-center text-sm text-gray-900 font-semibold">
                        <BookOpenIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                        <span className="truncate">Answer Question: {Object.keys(user.answers).length}</span>
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-900 font-semibold">
                        <QuestionMarkCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                        <span className="truncate">Created Question: {Object.keys(user.questions).length}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">

                  <p className="font-semibold text-gray-900">
                    Score : <span className="bg-green-500 px-3 py-3 rounded-full">{ user.score }</span>
                  </p>
                </div>
              </div>
            </div>
          </li>
        )
      }
    </>
  )
}

LeaderboardList.propTypes = {
  user: PropTypes.object.isRequired
}
