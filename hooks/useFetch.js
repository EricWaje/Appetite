import { useEffect, useState } from 'react';
//import API_URL from '../constants/API_URL';
//import API_KEY from '../constants/API_KEY';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const getRestaurants = async () => {
        const API_URL =
            'https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego';

        const API_KEY =
            'BZ2wWvxEqlsFIm6KxOBFh9OdBWgONvrE27RXT73W03BcDQKVT6_stTwxQ16Fqfu_301M7IQM0mhtrItbhJiONIyMBqGtIIedGAp1BZ5QvRbJGqcbbdB8_N9KMaiOYXYx';
        const ApiAuth = {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        };
        const info = await fetch(API_URL, ApiAuth);
        const response = await info.json();
        const { businesses } = response;
        setData(businesses);
    };

    useEffect(() => {
        getRestaurants();
    }, []);

    return [data, loading, error];
};

export default useFetch;
