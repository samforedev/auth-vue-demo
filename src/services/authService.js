// src/services/authService.js
import axios from 'axios';

const API_URL = 'https://05e521f4-a93f-44d4-aaad-e13f4ee4b549.mock.pstmn.io';

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
