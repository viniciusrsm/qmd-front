'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { User, AuthState } from '@/types/auth.types'
import { authEndpoints } from '@/service/api/endpoints/auth.endpoints'

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  })

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const user = await authEndpoints.getCurrentUser()
      setState({ user, isAuthenticated: true, isLoading: false })
    } catch (error) {
      setState({ user: null, isAuthenticated: false, isLoading: false })
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const response = await authEndpoints.login({ email, password })
      setState({ user: response.user, isAuthenticated: true, isLoading: false })
      router.push('/dados')
    } catch (error) {
      setState({ user: null, isAuthenticated: false, isLoading: false })
      throw error
    }
  }

  const logout = async () => {
    try {
      await authEndpoints.logout()
      setState({ user: null, isAuthenticated: false, isLoading: false })
      router.push('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
