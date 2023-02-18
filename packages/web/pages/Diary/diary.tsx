/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown';
import Header from '../../components/layouts/Header';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import localFont from '@next/font/local';
import CopyRight from '../../components/content/CopyRight';

const myFont = localFont({
  src: '../../components/layouts/RocknRollOne-Regular.ttf',
  weight: '700',
});

export default function Diary() {
  const [context, setContext] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchMsg = async () => {
      const message = await axios.get('http://localhost:3001/diary');
      return message;
    };
    fetchMsg().then(res => {
      setContext(res.data);
      console.log(typeof res.data);
    });
  }, []);

  return (
    <div
      className={myFont.className}
      style={{
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '3rem 8rem',
        overflow: 'hidden',
        padding: '2rem',
      }}
    >
      <div
        className="box"
        style={{
          margin: '0 auto',
          maxWidth: '100rem',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          borderRadius: 10,
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 12px 0px',
          padding: 30,
        }}
      >
        <ReactMarkdown children={context}></ReactMarkdown>
        <CopyRight copyRouter={router}></CopyRight>
      </div>
    </div>
  );
}

Diary.getLayout = function getLayout(page: React.ReactElement) {
  return <Header>{page}</Header>;
};
