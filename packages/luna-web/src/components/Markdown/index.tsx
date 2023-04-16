import React, { useLayoutEffect } from 'react';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import clsx from 'clsx';
// @ts-ignore
import Zooming from 'zooming';
import Heading from './Heading';
import Link from './Link';
import Image from './Image';
import Code from './Code';
import styles from './index.module.css';

import { Issue } from '../../type';

type MarkdownProps = {
  className?: string;
  content?: Issue;
};

const zooming = new Zooming({
  bgColor: 'var(--background-color)',
  enableGrab: false,
});

const Markdown: React.FC<MarkdownProps> = ({ className, content }) => {
  const [context, setContext] = useState('');
  const [title, setTitle] = useState('');

  useLayoutEffect(() => {
    zooming.listen('.img-zoomable');
  }, []);

  return (
    <div
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
        >{`# ${content?.title}`}</ReactMarkdown>
        <ReactMarkdown
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
          children={content?.body ?? ''}
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
        {/* <CopyRight copyRouter={router}></CopyRight> */}
      </div>
    </div>
  );
};

export default Markdown;
