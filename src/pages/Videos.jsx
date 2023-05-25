import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import Youtube, { search } from '../api/youtube';
import FakeYoutube from '../api/fakeYoutubeClient';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  // useQuery(캐시키, 어떻게 가지고 올건지 함수로 전달)
  // async() - 비동기 함수
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword));

  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : '🔥'}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {videos && (
        // 기본적으로 grid로 만들고, 반응형으로 만들기 위해 화면이 작으면 1줄로 표시
        // 화면이 small size를 넘어가면 2줄로 표시, 화면이 large size를 넘어가면 3줄로 표시 ...
        // gap을 2씩 주고 수직으로는 gap을 4 주기
        <ul className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}

