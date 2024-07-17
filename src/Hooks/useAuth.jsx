import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { getCookie } from '../utils/utils';
// Correct the path according to your project structure

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = getCookie('token');
        console.log('Token from cookie:', token);
        if (token) {
            try {
                const decoded = jwtDecode(token);
                console.log('Decoded token:', decoded); // Add this line for debugging
                setUser(decoded);
                setIsAuthenticated(true);
            } catch (error) {
                console.error('Invalid token:', error);
                setIsAuthenticated(false);
                setUser(null);
            }
        } else {
            console.log('Token not found'); // Add this line for debugging
            setIsAuthenticated(false);
            setUser(null);
        }
    }, []);

    return { isAuthenticated, user };
};

export default useAuth;
