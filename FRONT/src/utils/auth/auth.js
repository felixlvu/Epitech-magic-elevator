export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    
    console.log(token);
    if (!token) return false;

    const payload = JSON.parse(atob(token.split('.')[1]));
    const isExpired = payload.exp * 1000 < Date.now();

    return !isExpired;
};
