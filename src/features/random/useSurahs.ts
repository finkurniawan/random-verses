import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {Surah} from '../../types/types.ts';

const fetchSurahs = async (): Promise<Surah[]> => {
    const {data} = await axios.get<Surah[]>('http://localhost:3000/surahs');
    return data;
};

export const useSurahs = () => {
    return useQuery({
        queryKey: ['surahs'],
        queryFn: () => fetchSurahs(),
    });
};
