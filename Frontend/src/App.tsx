import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className='min-h-screen bg-gradient-to-br from-green-50 to-blue-50'>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login/:role' element={<LoginPage />} />
            <Route path='/dashboard/:role' element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App