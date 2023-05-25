import React from 'react';
import { formatAgo } from '../util/date';
import {useNavigate} from 'react-router-dom';

export default function VideoCard({video, type}) {
  const {title, thumbnails, channelTitle, publishedAt} = video.snippet;
  const navigate = useNavigate();
  const isList = type === 'list';
  return (
    <li 
      className={isList ? 'flex gap-1 m-2' : ''}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, {state: {video}});
      }}
    >
      {/* width = full */}
      <img className ={isList ? 'w-60 mr-2' : 'w-full'} src = {thumbnails.medium.url} alt={title}></img>
      <div>
        {/* my-2 = 위 아래로 margin 2 , line-clamp-2 : 줄 갯수를 최대 2줄로 제한*/}
        <p className ='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opactiy-80'>{channelTitle}</p>
        <p className='text-sm opactiy-80'>{formatAgo(publishedAt,'ko')}</p>
      </div>
    </li>
  );
}
/*시간을 몇분전으로 나오게 하기 -> yarn add timeago.js
설치방법
https://github.com/hustcc/timeago.js/blob/master/README.md
https://www.npmjs.com/package/timeago.js/v/4.0.0-beta.3
*/
