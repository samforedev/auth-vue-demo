// src/services/authService.js
import axios from 'axios';

const API_URL = 'https://584e05c2-c567-4056-8436-800b8fc4ccb6.mock.pstmn.io';

const authService = {
    async login(credentials) {
        try {
            const response = await axios.post(`${API_URL}/login`, credentials);
            console.log(response.data);
            return response.data; 
        } catch (error) {
            throw new Error('Login failed');
        }
    }
};

export default authService;
