import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const storedUser = localStorage.getItem('user');
        if(storedUser) {
            setUser(JSON.parse(storedUser));
        }
    },[]);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData))

    };

    const logOut = async() => {
        setUser(null);        
        localStorage.removeItem('user')
    }

    const authInfo = {
        user,
        login,
        logOut
    } 
    

    return (
        <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;