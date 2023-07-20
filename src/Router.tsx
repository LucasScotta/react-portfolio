import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { projectsPath } from './constants'
const Home = lazy(() => import('./Projects/Home/Home'))
const ToDo = lazy(() => import('./Projects/Todo/Todo'))
const Tateti = lazy(() => import('./Projects/Tateti/Tateti'))
export const Router = () => {
  const { HOME, TODO, TATETI, TIKTAKTOE } = projectsPath
  return (
    <BrowserRouter>
      <Suspense fallback={<>LOADING...</>}>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={TODO} element={<ToDo />} />
          <Route path={TATETI} element={<Tateti />} />
          <Route path={TIKTAKTOE} element={<Tateti />} />
          <Route path="*" element={<Navigate to={HOME} replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
