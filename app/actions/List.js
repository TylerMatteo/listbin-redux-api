import { ADD_LIST } from '../constants/action-types';

export function addList(payload) {
    return { type: ADD_LIST, payload }
}