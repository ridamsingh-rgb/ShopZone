import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

function Login() {
  const { isLoggedIn, loginAsGuest } = useAuth()

  if (isLoggedIn) {
    return <Navigate to="/checkout" />
  }

  return (
    <div>
      <h1>Login</h1>

      <p>Continue as a guest to proceed with checkout.</p>

      <button onClick={loginAsGuest}>
        Login as Guest
      </button>
    </div>
  )
}

export default Login