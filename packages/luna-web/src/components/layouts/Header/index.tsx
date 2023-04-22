import AvatarTip from '../../fragment/AvatarTip';
import MenuBlock from '../../fragment/MenuBlock';
import Switcher from '../../fragment/Switcher';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './index.module.css';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

export default function Header({ children }: Props) {
  const [showTip, setShowTip] = useState(false);

  const enterTipHandle = () => {
    console.log('enter!');
    setShowTip(true);
  };

  const leaveTipHandle = () => {
    console.log('out!');
    setShowTip(false);
  };

  const handleTitleClick = () => {
    // router.push('/');
  };

  return (
    <>
      <div className={styles.header}>
        <div onClick={handleTitleClick}>
          <h2 style={{ cursor: 'default', fontSize: '3rem', margin: 0 }}>
            Shadow Luna
          </h2>
        </div>
        <div className="input">
          <Search
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
        <div className="avatar">
          <Switcher></Switcher>
        </div>
      </div>
      {children}
    </>
  );
}

interface Props {
  children?: React.ReactNode;
}
