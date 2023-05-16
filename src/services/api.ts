import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://parseapi.back4app.com/parse/classes',
    headers: {
        'X-Parse-Application-Id': 'yU7iof9nLHP2bBDx5hVNkbUf4CL8dh9Q87ADIUdA',
        'X-Parse-REST-API-Key': 'Ur2DRMtloCdS7puXXb0aNd5iwOVeCsKY7uq4BvXS',
        'Content-Type': 'application/json'
    },
    timeout: 100,
})

