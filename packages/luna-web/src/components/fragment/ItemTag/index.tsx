import styles from './index.module.css';
import { Save, SendOne, Export, Tag, Right } from '@icon-park/react';

export default function ItemTag({ TagName, TagSource }: TagType) {
  return (
    <>
      <div
        className="tag"
        style={{ marginTop: '4rem', marginBottom: '2rem', cursor: 'default' }}
      >
        <h3
          className={
            TagSource === 'Right' ? styles.right_element : styles.left_element
          }
        >
          {TagSource === 'Right' ? (
            <Right
              theme="outline"
              size="20"
              fill="#fff"
              style={{
                position: 'absolute',
                marginTop: '0.5rem',
              }}
            />
          ) : (
            <Tag
              theme="outline"
              size="20"
              fill="#fff"
              style={{
                position: 'absolute',
                left: '1.5rem',
                marginTop: '0.5rem',
              }}
            />
          )}
          <div className="text">{TagName ? TagName : ' '}</div>
        </h3>
      </div>
    </>
  );
}

interface TagType {
  TagName?: string;
  TagSource?: string;
}
