import { authEndpoints } from '@/service/api/endpoints/auth.endpoints';
import { verifySession } from './auth.dal';

export const loginUser = async (credentials: any) => {
  try {
    return await authEndpoints.login(credentials);
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

export const signupUser = async (userData: any) => {
  try {
    return await authEndpoints.signup(userData);
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
}

export const logoutUser = async () => {
  const session = await verifySession()
  if (!session) return null

  try {
    return await authEndpoints.logout();
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
}

export const getCurrentUser = async () => {
  const session = await verifySession()
  if (!session) return null

  try {
    return await authEndpoints.getCurrentUser();
  } catch (error) {
    console.error('Get current user error:', error);
    throw error;
  }
}
