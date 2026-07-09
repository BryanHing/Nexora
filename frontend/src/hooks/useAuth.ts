import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@store/index';
import { setLoading, setUser, setToken, setError, logout } from '@store/slices/authSlice';
import { apiClient } from '@utils/api';
import { LoginCredentials, SignupCredentials } from '@types/index';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isLoading, isAuthenticated, error } = useSelector(
    (state: RootState) => state.auth
  );

  const login = async (credentials: LoginCredentials) => {
    dispatch(setLoading(true));
    try {
      const response = await apiClient.post('/auth/login', credentials);
      if (response.data) {
        dispatch(setUser(response.data.user));
        dispatch(setToken(response.data.token));
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Login failed';
      dispatch(setError(message));
      throw err;
    }
  };

  const signup = async (credentials: SignupCredentials) => {
    dispatch(setLoading(true));
    try {
      const response = await apiClient.post('/auth/signup', credentials);
      if (response.data) {
        dispatch(setUser(response.data.user));
        dispatch(setToken(response.data.token));
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Signup failed';
      dispatch(setError(message));
      throw err;
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    user,
    isLoading,
    isAuthenticated,
    error,
    login,
    signup,
    logout: handleLogout,
  };
};
