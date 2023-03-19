import styles from './ControlItem.module.css';
import { useState, useEffect } from 'react';

function ControlItem({
  context,
  itemKey,
  currIndex,
  handleIndex,
  functionLink,
}: ItemProps) {
  const [clickItem, setClickItem] = useState(false);

  useEffect(() => {
    if (itemKey === currIndex) {
      setClickItem(true);
    } else {
      setClickItem(false);
    }
  }, [currIndex, itemKey]);

  const handleClick = () => {
    handleIndex(itemKey);
    if (functionLink) {
    } else {
    }
  };

  return (
    <>
      <div
        className={`item ${clickItem ? styles.change : styles.inactive}`}
        style={{
          flex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 16,
          fontWeight: 600,
          color: 'white',
          borderRadius: '3rem 0 0 3rem',
          marginBottom: '2.5rem',
          cursor: 'default',
        }}
        onClick={handleClick}
      >
        {context}
      </div>
    </>
  );
}

interface ItemProps {
  context: string;
  itemKey: string;
  currIndex: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleIndex: any;
  functionLink?: string;
}

export default ControlItem;
