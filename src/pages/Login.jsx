import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Login() {
  const { isLoggedIn, loginAsGuest } = useAuth()

  if (isLoggedIn) {
    return <Navigate to="/checkout" />
  }

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h1>Login</h1>

      <p>Continue as a guest to proceed with checkout.</p>

      <button onClick={loginAsGuest}>
        Login as Guest
      </button>
    </div>
  )
}

export default Login