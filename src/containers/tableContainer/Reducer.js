import {
    GET_TABLE_DATA,
    GET_TABLE_DATA_SUCCESS,
    GET_TABLE_DATA_ERROR,
    UPDATE_USER_STATUS,
    UPDATE_USER_STATUS_SUCCESS,
    UPDATE_USER_STATUS_ERROR
} from './Constants';

const initialState = {
    loading: false,
    success: false,
    error: ''
};

function tableReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TABLE_DATA:
            return Object.assign({}, state, {
                'loading': true,
                'success': false,
                'error': ''
            });
        case GET_TABLE_DATA_ERROR:
            return Object.assign({}, state, {
                'loading': false,
                'success': false,
                'error': action
            });
        case GET_TABLE_DATA_SUCCESS:
            return Object.assign({}, state, {
                'loading': false,
                'success': true,
                'error': '',
                'tableData': action.data
            });
        case UPDATE_USER_STATUS:
            return Object.assign({}, state, {
                'loading': true,
                'success': false,
                'error': ''
            });
        case UPDATE_USER_STATUS_ERROR:
            return Object.assign({}, state, {
                'loading': false,
                'success': false,
                'error': action
            });
        case UPDATE_USER_STATUS_SUCCESS:
            return Object.assign({}, state, {
                'loading': false,
                'success': true,
                'error': '',
                'updateStatusResponse': action.data
            });
        default:
            return state;
    }
}

export default tableReducer;
