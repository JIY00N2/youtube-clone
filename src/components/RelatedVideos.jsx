import React from 'react';
import {useYoutubeApi} from '../context/YoutubeApiContext';
import {useQuery} from '@tanstack/react-query';
import VideoCard from './VideoCard';

export default function RelatedVideos({id}) {
  const {youtube} = useYoutubeApi();
  const {
    isLoading, 
    error, 
    data:videos
  } = useQuery(['related', id], () => youtube.relatedVideos(id));
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {videos && (
        // 기본적으로 grid로 만들고, 반응형으로 만들기 위해 화면이 작으면 1줄로 표시
        // 화면이 small size를 넘어가면 2줄로 표시, 화면이 large size를 넘어가면 3줄로 표시 ...
        // gap을 2씩 주고 수직으로는 gap을 4 주기
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}