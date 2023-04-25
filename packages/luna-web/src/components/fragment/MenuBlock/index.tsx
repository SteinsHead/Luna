import { Bookshelf, LarkOne, Me, Terminal } from '@icon-park/react';

function MenuBlock({ blockName, blockLink }: MenuProps) {
  const bookshelf = (
    <Bookshelf
      theme="outline"
      size="20"
      fill="#fff"
      style={{ marginTop: '0.5rem' }}
    />
  );

  const blog = (
    <LarkOne
      theme="outline"
      size="20"
      fill="#fff"
      style={{ marginTop: '0.5rem' }}
    />
  );

  const about = (
    <Me theme="outline" size="20" fill="#fff" style={{ marginTop: '0.5rem' }} />
  );

  const tech = (
    <Terminal
      theme="outline"
      size="20"
      fill="#fff"
      style={{ marginTop: '0.5rem' }}
    />
  );
  return (
    <>
      <div
        className="menu"
        style={{
          backgroundColor: '#e2e0f5',
          flex: 1,
          margin: 5,
          borderRadius: 5,
          padding: 5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 2px 12px 0 rgb(0 0 0 / 10%)',
          cursor: 'default',
        }}
      >
        {blockName === 'Diary' ? (
          bookshelf
        ) : blockName === 'Blog' ? (
          blog
        ) : blockName === 'About' ? (
          about
        ) : blockName === 'Tech' ? (
          tech
        ) : (
          <></>
        )}
        <p
          style={{
            margin: 0,
            color: '#000',
            fontWeight: 700,
            marginLeft: '.5rem',
          }}
        >
          {blockName}
        </p>
      </div>
    </>
  );
}

interface MenuProps {
  blockName?: string;
  blockLink?: string;
}

export default MenuBlock;
