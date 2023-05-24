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
    // width = full, flex를 이용해서 일렬로 나오게
    // padding = 4, text = 2xl, border-bottom에 색깔 zinc 600 정도
    // margin-bottom = 4
    <header className ='w-full flex p-4 text-2xl border-b border-zinc-600
    mb-4'>
      {/* youtube를 누르면 최상위 경로로 이동 */}
      {/* items-center 수직으로 중간 정렬 */}
      <Link to ='/' className='flex items-center'>
        {/* 로고가 있는 부분 */}
        <BsYoutube className ='text-4xl text-brand'/>
        {/* ml = margin-left */}
        <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
      </Link>
      {/* justfiy-center 너비가 넓어져도 항상 중간에 오도록 */}
      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        {/* 사용자가 검색할 수 있는 부분*/}
        <input
          // focus가 되면 outline-none
          className='w-7/12 p-2 outline-none bg-black text-gray-50'
          type="text" 
          placeholder='Search...' 
          value={text} 
          onChange ={(e)=>setText(e.target.value)}>
        </input>
        {/* px-4 = 양쪽으로 padding 4 */}
        <button className='bg-zinc-600 px-4'>
          <BsSearch></BsSearch>
        </button>
      </form>
    </header>
  );
}

