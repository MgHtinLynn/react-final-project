import React from "react"
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from "react-redux"

const PrivateRoute = (props) => {
  const { children, ...all } = props
  const authedUser = useSelector(state => state.auth)

  return (
    <Route {...all} render={({location}) => {

        if (authedUser === null) {
          return (
            <Redirect to={{
              pathname: '/login',
              state: { from: location }}}/>
          )
        } else {
          return (children)
        }

    }}/>
  )
}

export default PrivateRoute
