import React, { useLayoutEffect } from 'react';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
// import clsx from 'clsx';
// @ts-ignore
import Zooming from 'zooming';
// import Heading from './Heading';
// import Link from './Link';
// import Image from './Image';
// import Code from './Code';
// import styles from './index.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
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
                return (
                  <h2
                    className={styles.container}
                    {...props}
                    style={{ textAlign: 'center', fontSize: '4rem' }}
                  ></h2>
                );
              },
            }}
          >{`# ${content?.title}`}</ReactMarkdown>
          <ReactMarkdown
            className={styles.context}
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
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, '')}
                    style={dark}
                    language={match[1]}
                    PreTag="div"
                  />
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                );
              },
              // blockquote({...props}) {
              //   return (
              //     <blockquote className={styles.blockquote}>
              //       <p {...props}></p>
              //     </blockquote>
              //   );
              // }
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Markdown;
