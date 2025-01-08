import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'
import MainPage from './pages/MainPage/MainPage'
import SearchPage from './pages/SearchPage/SearchPage'
import AuthPage from './pages/AuthPage/AuthPage'
import FilmPage from './pages/FilmPage/FilmPage'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import FavoritePage from './pages/FavoritePage/FavoritePage'

const RootComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path={ROUTES.AUTHPAGE_ROUTE} element={<AuthPage />} />
        <Route path={ROUTES.MAINPAGE_ROUTE} element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        } />
        <Route path={ROUTES.SEARCHPAGE_ROUTE} element={
          <ProtectedRoute>
            <SearchPage />
          </ProtectedRoute>
        } />
        <Route path={ROUTES.FILMPAGE_ROUTE} element={
          <ProtectedRoute>
            <FilmPage />
          </ProtectedRoute>
        } />
        <Route path={ROUTES.FAVORITE_ROUTE} element={
          <ProtectedRoute>
            <FavoritePage />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  )
}

export default RootComponent
