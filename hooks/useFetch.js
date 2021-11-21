import { useEffect, useState } from 'react';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getRestaurants = async () => {
        const API_URL =
            'https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood';

        const API_KEY =
            'BZ2wWvxEqlsFIm6KxOBFh9OdBWgONvrE27RXT73W03BcDQKVT6_stTwxQ16Fqfu_301M7IQM0mhtrItbhJiONIyMBqGtIIedGAp1BZ5QvRbJGqcbbdB8_N9KMaiOYXYx';
        const ApiAuth = {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        };
        try {
            const info = await fetch(API_URL, ApiAuth);
            const response = await info.json();
            const { businesses } = response;
            setData(businesses);
            setLoading(false);
        } catch (e) {
            setData([]);
            setLoading(true);
            setError(true);
        }
    };

    useEffect(() => {
        getRestaurants();
    }, []);

    return [data, loading, error];
};

export default useFetch;
