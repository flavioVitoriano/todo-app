import api from '.';

export const placeholder = {
    signin: (data) => api.post('/token', data),
};