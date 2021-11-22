import { lazy } from 'react'

const Routers = [
  {
    path: '/',
    component: lazy(() => import('../views/dashboard/dashboard')),
    privateRoute: true
  },
  {
    path: '/add',
    component: lazy(() => import('../views/questions/question.new')),
    privateRoute: true
  },
  {
    path: '/questions/:question_id',
    component: lazy(() => import('../views/questions/question.detail')),
    privateRoute: true
  },
  {
    path: '/leaderboard',
    component: lazy(() => import('../views/leaderboard/leaderboard.lists')),
    privateRoute: true
  },
  {
    path: '*',
    component: lazy(() => import('../views/errors/notFound')),
    privateRoute: true
  }
]

export { Routers }
