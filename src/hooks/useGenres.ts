import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Genres {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

interface GenresResponse {
    count: number;
    results: Genres[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genres[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
        
    useEffect(() => {
        setLoading(true);
        const controller = new AbortController(); 
        
        apiClient.get<GenresResponse>('/genres', {signal: controller.signal})
            .then(res => {setGenres(res.data.results); setLoading(false);})
            .catch(err => {
                if (err.name === 'CanceledError') return;
                setError(err.message);
                setLoading(false);             
            });
            
        return () => controller.abort();
    }, []);
      
    return {genres, error, isLoading};
}

export default useGenres;