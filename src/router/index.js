import React, { useEffect, Fragment, lazy } from 'react'
import { useDispatch } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom"
import { handleInitialData } from "../redux/actions/shared"
import LayoutWrapper from '../views/layouts'
import PrivateRoute from "./privateRoute"
import { Routers } from "./routes"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    document.title = "Question & Poll"
    dispatch(handleInitialData())
  }, [])
  const Login = lazy(() => import('../views/login/login'))
 //const NotFound = lazy(() => import('../views/errors/notFound'))
  return (
    <Router>
      <Fragment>
        <LoadingBar/>
        <LayoutWrapper.NavBar/>
        <Switch>
          <Route exact path="/login" component={Login}/>
          {
            Routers.map((route) => (
              <PrivateRoute key={route.path} exact path={route.path}>
                <route.component/>
              </PrivateRoute>
            ))
          }
        </Switch>
      </Fragment>
    </Router>
  )
}

export default App
