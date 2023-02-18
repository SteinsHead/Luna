import Link from 'next/link';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import AvatarTip from '../fragment/AvatarTip';
import MenuBlock from '../fragment/MenuBlock';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import localFont from '@next/font/local';
import styles from './Header.module.css';

const myFont = localFont({ src: './RocknRollOne-Regular.ttf', weight: '700' });

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

export default function Header({ children }: Props) {
  const [showTip, setShowTip] = useState(false);

  const router = useRouter();

  const enterTipHandle = () => {
    console.log('enter!');
    setShowTip(true);
  };

  const leaveTipHandle = () => {
    console.log('out!');
    setShowTip(false);
  };

  const handleTitleClick = () => {
    router.push('/');
  };

  return (
    <>
      <div className={styles.header}>
        <div className={myFont.className} onClick={handleTitleClick}>
          <h2 style={{ cursor: 'default', fontSize: '3rem', margin: 0 }}>
            Shadow Luna
          </h2>
        </div>
        <div className="input">
          <Search
            className={myFont.className}
            placeholder="想要搜些 ..."
            allowClear
            onSearch={onSearch}
            size="large"
            style={{ width: '35rem' }}
          />
        </div>
        <div
          className="context"
          style={{
            display: 'flex',
            flexDirection: 'row',
            minWidth: '38rem',
            minHeight: '6rem',
            gap: '1rem',
          }}
        >
          {[
            ['/Diary/diary', 'Diary'],
            ['/Blog/blog', 'Blog'],
            ['/About/about', 'About'],
            ['/Tech/tech', 'Tech'],
          ].map(item => {
            return (
              <MenuBlock
                key={item[1]}
                blockLink={item[0]}
                blockName={item[1]}
              ></MenuBlock>
            );
          })}
        </div>
        <div
          className="avatar"
          style={{
            height: '6rem',
            width: '6rem',
            borderRadius: '6rem',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={() => enterTipHandle()}
          onMouseLeave={() => leaveTipHandle()}
        >
          <Image src="/avatar.jpg" alt="pic of the author" layout="fill" />
        </div>
        <div
          className={`toolTip`}
          style={{
            position: 'absolute',
            top: '10.5rem',
            right: '3rem',
            zIndex: '999',
          }}
        >
          <AvatarTip isShown={showTip}></AvatarTip>
        </div>
      </div>
      {children}
    </>
  );
}

interface Props {
  children?: React.ReactNode;
}
