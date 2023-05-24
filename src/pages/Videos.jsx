import React from 'react';
import {useParams} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import axios from 'axios';

export default function Videos() {
  const {keyword} = useParams();
  // useQuery(캐시키, 어떻게 가지고 올건지 함수로 전달)
  // async() - 비동기 함수
  const {isLoading, error, data: videos} = useQuery(
    ['videos',keyword], async () => {return axios.get(`/videos/${keyword ? 'search' : 'poplular'}.json`)
    .then(res => res.data.items);
  });
  return (
    <>
      <div>Videos {keyword ? `💡${keyword}` : '🔥'}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && <ul>
        {videos.map(video => <VideoCard key={video.id} video={video}></VideoCard>)}
        </ul>}
    </>
    
  );
}

