import { useState } from 'react'
import LoginPage from './components/LoginPage'
import Layout from './components/Layout'
import DashboardContent from './components/DashboardContent'
import Clients from './components/Clients'
import BotTemplates from './components/BotTemplates'
import UserManagement from './components/UserManagement'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [page, setPage] = useState('dashboard')
  const [activeSub, setActiveSub] = useState('Modules')

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <Layout onLogout={handleLogout} setPage={setPage} page={page}>
          {page === 'dashboard' ? (
            <DashboardContent />
          ) : page === 'clients' ? (
            <Clients />
          ) : page === 'botTemplates' ? (
            <BotTemplates />
          ) : (
            <UserManagement activeSub={activeSub} setActiveSub={setActiveSub} />
          )}
        </Layout>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  )
}

export default App
