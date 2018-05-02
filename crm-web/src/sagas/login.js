import { call, put, take } from 'redux-saga/effects';
import { REQUEST_LOGIN, LOGIN_RESPONSE } from '../reducers/loginReducer';
import accountLogin from '../services/oauth';

export default function* login() {
    while(true){
        const { param, history } = yield take(REQUEST_LOGIN);
        console.log(param);
        const response = yield call(accountLogin,param);
        if(response.status === 0) {
            localStorage.setItem('loggedIn','true');
            localStorage.setItem('expireIn', response.data);
            history.push('/app');
        }
        yield put({type: LOGIN_RESPONSE});
    }
}