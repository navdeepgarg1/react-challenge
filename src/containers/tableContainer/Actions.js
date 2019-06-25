import {
    GET_TABLE_DATA,
    GET_TABLE_DATA_SUCCESS,
    GET_TABLE_DATA_ERROR,
    UPDATE_USER_STATUS,
    UPDATE_USER_STATUS_SUCCESS,
    UPDATE_USER_STATUS_ERROR
} from './Constants';

export function getTableData() {
    return {
        type: GET_TABLE_DATA
    };
}
export function getTableDataSuccess(data) {
    return {
        type: GET_TABLE_DATA_SUCCESS,
        data,
    };
}
export function getTableDataError(error) {
    return {
        type: GET_TABLE_DATA_ERROR,
        error,
    };
}

export function updateUserStatus() {
    return {
        type: UPDATE_USER_STATUS
    };
}
export function updateUserStatusSuccess(data) {
    return {
        type: UPDATE_USER_STATUS_SUCCESS,
        data,
    };
}
export function updateUserStatusError(error) {
    return {
        type: UPDATE_USER_STATUS_ERROR,
        error,
    };
}

export function getTableDataMethods() {
    return dispatch => {
        dispatch(getTableData());
        fetch('http://eiysys.front.challenge.dev.monospacelabs.com/users')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(getTableDataSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(getTableDataError(error));
            })
    }
}

export function updateStatus(requestBody, id) {
    return dispatch => {
        dispatch(updateUserStatus());
        fetch(`http://eiysys.front.challenge.dev.monospacelabs.com/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(requestBody),
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(updateUserStatusSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(updateUserStatusError(error));
            })
    }
}

