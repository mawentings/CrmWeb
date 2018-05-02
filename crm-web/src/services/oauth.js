import request from '../utils/request';

export default async function accountLogin(params) {
    return request('/server/oauth/token/cookietoken', {
        method: 'POST',
        body: params
    });
}