import { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from './api';

const apiClient = axios.create({
    baseURL: API_URLS.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});


const fetchmenus = () => {

}