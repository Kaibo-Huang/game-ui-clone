import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

export interface Genres {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

interface FetchResponse <T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
        
    useEffect(() => {
        setLoading(true);
        const controller = new AbortController(); 
        
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
            .then(res => {setData(res.data.results); setLoading(false);})
            .catch(err => {
                if (err.name === 'CanceledError') return;
                setError(err.message);
                setLoading(false);             
            });
            
        return () => controller.abort();
    }, deps ? [...deps] : []);
      
    return {data, error, isLoading};
}

export default useData;