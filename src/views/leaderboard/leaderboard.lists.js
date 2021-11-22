import React from 'react'
import {useSelector} from "react-redux"
import LeaderboardList from "./leaderboard.list"

export default function LeaderboardLists() {
  const users = useSelector(state => state.users)

  const UserList = users ? Object.keys(users).map((userId) => {
    const user = users[userId]
    const score = Object.keys(user.answers).length + Object.keys(user.questions).length
    return {...user, score}
  }).sort((firstUser, secondUser) => secondUser.score - firstUser.score) : null

  return (
    <main className="bg-gray-100 h-screen">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="max-w-none mx-auto bg-white">
          <ul role="list" className="divide-y divide-gray-200">
            {
              UserList.map((user) => (
                <LeaderboardList key={user.id} user={user}/>
              ))
            }
          </ul>
        </div>
      </div>
    </main>
  )
}
