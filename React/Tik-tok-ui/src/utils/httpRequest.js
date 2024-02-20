import * as httpRequest from '~/utils/httpRequest';
const axios = require('axios');
httpRequest.get = undefined;
httpRequest.get = async function (usersSearch, param2) {
    try {
        const response = await axios.get('https://api.example.com/data', {
            params: {
                search: usersSearch,
                param2: param2
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        // Handle errors
        console.error('Error making the HTTP request:', error.message);
        throw error;
    }
};

export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};