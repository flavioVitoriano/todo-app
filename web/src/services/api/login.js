import api from '.';

const placeholder = {
    signin: (data) => api.post('/token', data),
};

export default placeholder;