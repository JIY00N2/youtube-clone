import React, { useEffect, useState } from 'react';
import {BsYoutube, BsSearch} from 'react-icons/bs';
import {Link, useNavigate, useParams} from 'react-router-dom';

export default function SearchHeader() {
  const {keyword} = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  // keyword가 변경될때마다 text를 업데이트
  useEffect(() => setText(keyword || ''), [keyword]);
  return (
    <header>
      {/* youtube를 누르면 최상위 경로로 이동 */}
      <Link to ='/'>
        {/* 로고가 있는 부분 */}
        <BsYoutube/>
        <h1>Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        {/* 사용자가 검색할 수 있는 부분*/}
        <input 
          type="text" 
          placeholder='Search...' 
          value={text} 
          onChange ={(e)=>setText(e.target.value)}>
        </input>
        <button>
          <BsSearch></BsSearch>
        </button>
      </form>
    </header>
  );
}

