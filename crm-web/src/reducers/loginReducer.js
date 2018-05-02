
/* 此文件用于处理登录有关的state改变*/


export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';

export const login = (param, history) =>{
    return {
        type: REQUEST_LOGIN,
        param,
        history
    }
}

const initialState = {
    loading : false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REQUEST_LOGIN:
            return {
                ...state,
                loading : true
            }
        case LOGIN_RESPONSE:
            return {
                ...state,
                loading : false
            }
    }
    return state;
}


// export default function(state={},action){
//     switch (action.type){
//         case CHANGE_AUTH:
//             return {
//                 ...state,
//                 authenticated : action.payload,
//             };
//         case LOGIN_RESPONSE_RESULT:
//             return {
//                 ...state,
//                 user : action.response,
//                 authenticated:true,
//             };
//     }
//     return state;
// }
