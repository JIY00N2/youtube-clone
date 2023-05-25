import React from 'react';
import { formatAgo } from '../util/date';

export default function VideoCard({video}) {
  const {title, thumbnails, channelTitle, publishedAt} = video.snippet; 
  return (
    <li>
      <img src = {thumbnails.medium.url} alt={title}></img>
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt,'ko')}</p>
      </div>
    </li>
  );
}
/*시간을 몇분전으로 나오게 하기 -> yarn add timeago.js
설치방법
https://github.com/hustcc/timeago.js/blob/master/README.md
https://www.npmjs.com/package/timeago.js/v/4.0.0-beta.3
*/
