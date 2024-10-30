import axios from "axios";

const API_URL = 'https://584e05c2-c567-4056-8436-800b8fc4ccb6.mock.pstmn.io';

const userService = {
    async getUsers() {
        try {
            const response = await axios.get(`${API_URL}/users/getAll`);
            return response.data;
        } catch (error) {
            throw new Error('Users failed');
        }
    }
};

export default userService;