import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import { GET_ONE_PHOTO } from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import PhotoContent from './PhotoContent'

const Photo = () => {
    const { id } = useParams();
    const { data, loading, error, request } = useFetch();

    React.useEffect(() => {
        const { url } = GET_ONE_PHOTO(id);
        request(url);
    }, [id, request]);

    if(error) return <Error />
    if(loading) return <Loading />
    if(data) return <section className='container mainContainer'><PhotoContent single={true} data={data} /></section>
    
    else return null;
};

export default Photo