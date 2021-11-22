import React, {useState} from "react"
import Logo from '../../logo.svg'
import { useDispatch, useSelector } from "react-redux"
import { setAuthedUser } from "../../redux/actions/authedUser"
import {useHistory, useLocation} from "react-router-dom"

export default function Login() {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const [userId, setUserId] = useState(null)
  const LoginSubmit = () => {
    dispatch(setAuthedUser(userId))
    if (location.state === undefined) {
      history.push('/')
    } else {
      history.push(location.state.from.pathname)
    }

  }
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-6 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src={Logo}
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Select User
                </label>
                <select
                  id="location"
                  name="location"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  defaultValue="Canada"
                  onChange={(e) => setUserId(e.target.value)}
                >
                  <option>-</option>
                  {
                    Object.keys(users).length > 0 &&
                    Object.keys(users).map(userId => (
                      <option key={userId} value={userId}>{users[userId].name}</option>
                    ))
                  }
                </select>
              </div>

              <div>
                <button
                  onClick={LoginSubmit}
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
