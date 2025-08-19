// This file handles user authentication functionalities, including sign-up and login processes. 
// It manages user sessions and ensures secure access to the application.

const auth = (() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = null;

    const signUp = (username, password) => {
        if (users.find(user => user.username === username)) {
            alert('Username already exists!');
            return false;
        }
        const newUser = { username, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Sign-up successful!');
        return true;
    };

    const login = (username, password) => {
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            alert('Login successful!');
            return true;
        } else {
            alert('Invalid username or password!');
            return false;
        }
    };

    const logout = () => {
        currentUser = null;
        localStorage.removeItem('currentUser');
        alert('Logged out successfully!');
    };

    const getCurrentUser = () => {
        if (!currentUser) {
            currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        return currentUser;
    };

    return {
        signUp,
        login,
        logout,
        getCurrentUser
    };
})();