import { apiService } from '../api'
import type { LoginRequest, LoginResponse, User } from '@/types/auth.types'

export const authEndpoints = {
  login: (data: LoginRequest): Promise<LoginResponse> => 
    apiService.post('/auth/login', data),
    
  signup: (data: LoginRequest): Promise<LoginResponse> => 
    apiService.post('/auth/signup', data),
    
  logout: (): Promise<void> => 
    apiService.post('/auth/logout', {}),
    
  getCurrentUser: (): Promise<User> => 
    apiService.get('/auth/me')
}
