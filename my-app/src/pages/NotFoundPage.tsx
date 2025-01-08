import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()
  const redirectToHomePage = () => {
    navigate(ROUTES.MAINPAGE_ROUTE)
  }

  return (
    <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1 style={{ fontSize: '4em' }}>Oops 404!</h1>
      <span style={{ cursor: 'pointer' }} onClick={() => redirectToHomePage()}>
        Mainpage
      </span>
    </div>
  )
}

export default NotFoundPage
