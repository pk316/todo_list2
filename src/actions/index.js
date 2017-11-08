import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com/todos'
const API_KEY = '?key=c917todolist'

export function getAll(){
    const request = axios.get(BASE_URL + API_KEY);

    return {
        type : types.GET_ALL,
        payload : request
    }
}

