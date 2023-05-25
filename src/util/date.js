import {format, register} from 'timeago.js';
// 한국어 설정법
import koLocale from 'timeago.js/lib/lang/ko';
register('ko', koLocale);

export function formatAgo(date,lang="en_US"){
  return format(date, lang);
}