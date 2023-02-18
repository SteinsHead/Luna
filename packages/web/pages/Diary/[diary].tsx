/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
import Header from '../../components/layouts/Header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import remarkGfm from 'remark-gfm';
import localFont from '@next/font/local';
import CopyRight from '../../components/content/CopyRight';

const myFont = localFont({
  src: '../../components/layouts/RocknRollOne-Regular.ttf',
  weight: '700',
});

export default function DiaryPage() {
  const [context, setContext] = useState('');
  const [title, setTitle] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchMsg = async () => {
      const id = router.query.diary as string;
      setTitle(id);
      const type = router.query.type as string;
      console.log(type);
      const message = await axios.get(`http://localhost:3001/${type}/${id}`);
      return message;
    };
    fetchMsg().then(res => {
      setContext(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          width: '100rem',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          borderRadius: 10,
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 12px 0px',
          padding: 30,
        }}
      >
        <ReactMarkdown
          components={{
            h1({ ...props }) {
              return <h2 {...props} style={{ textAlign: 'center' }}></h2>;
            },
          }}
        >{`# ${title}`}</ReactMarkdown>
        <ReactMarkdown
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
          children={context}
          components={{
            img({ alt, src, ...props }) {
              console.log({ ...props });
              return (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img alt={alt} src={src} style={{ maxWidth: '100%' }} />
                </div>
              );
            },
          }}
        />
        <CopyRight copyRouter={router}></CopyRight>
      </div>
    </div>
  );
}

DiaryPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Header>{page}</Header>;
};
