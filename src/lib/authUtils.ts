
/**
 * Simple client-side authentication utilities
 * Note: In a production app, you'd want to use a more secure authentication system
 */

export const isLoggedIn = (): boolean => {
  return localStorage.getItem('userEmail') !== null;
};

export const getCurrentUser = (): string | null => {
  return localStorage.getItem('userEmail');
};

export const logout = (): void => {
  localStorage.removeItem('userEmail');
  window.location.reload();
};
