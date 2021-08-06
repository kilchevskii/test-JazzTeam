const AUTHORIZED = 'auth';

const getAuthorized = () => {
   return localStorage.getItem(AUTHORIZED);
};

const logout = (history) => {
   localStorage.removeItem(AUTHORIZED);
   history.push('/');
};

export { getAuthorized, logout };
