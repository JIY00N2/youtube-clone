import React from 'react';
import {useParams} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import Youtube, {search} from '../api/youtube';
import FakeYoutube from '../api/fakeYoutube';
import { useYoutubeApi } from '../context/YoutubeApiContext';


export default function Videos() {
  const {keyword} = useParams();
  const {youtube} = useYoutubeApi();
  // useQuery(캐시키, 어떻게 가지고 올건지 함수로 전달)
  // async() - 비동기 함수
  const {isLoading, error, data: videos} = useQuery(['videos',keyword], () => youtube.search(keyword));
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

