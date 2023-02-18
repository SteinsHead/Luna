/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown';
import React, { useState, useEffect } from 'react';
import Header from '../../components/layouts/Header';
import axios from 'axios';
import Diary from '../Diary/diary';

export default function About() {
  const [context, setContext] = useState('');

  useEffect(() => {
    const fetchMsg = async () => {
      const message = await axios.get('http://localhost:3001/about');
      setContext(message.data);
    };
    fetchMsg();
  }, []);

  return (
    <div
      className="container"
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
      </div>
    </div>
  );
}

About.getLayout = function getLayout(page: React.ReactElement) {
  return <Header>{page}</Header>;
};
