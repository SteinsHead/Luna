import Link from 'next/link';

function MenuBlock({ blockName, blockLink }: MenuProps) {
  return (
    <>
      <div
        className="menu"
        style={{
          backgroundColor: '#e2e0f5',
          flex: 1,
          margin: 5,
          borderRadius: 5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 2px 12px 0 rgb(0 0 0 / 10%)',
        }}
      >
        <Link href={blockLink}>
          <p style={{ margin: 0 }}>{blockName}</p>
        </Link>
      </div>
    </>
  );
}

interface MenuProps {
  blockName: string;
  blockLink: string;
}

export default MenuBlock;
