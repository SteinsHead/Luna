import styles from './ItemTag.module.css';

export default function ItemTag({ TagName }: TagType) {
  return (
    <>
      <div
        className="tag"
        style={{ marginTop: '4rem', marginBottom: '2rem', cursor: 'default' }}
      >
        <h3 className={styles.element}>
          <div className="text">{TagName ? TagName : '这是测试文字'}</div>
        </h3>
      </div>
    </>
  );
}

interface TagType {
  TagName?: string;
}
