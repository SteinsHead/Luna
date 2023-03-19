import styles from './Card.module.css';

function Card({ picture, cardTitle, cardType }: cardTypes) {
  const handleClick = () => {};

  return (
    <div
      className="card"
      style={{
        height: 180,
        width: 280,
        backgroundColor: '#bdaac1',
        borderRadius: 5,
        margin: 10,
        flexShrink: 0,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 2px 12px 0 rgb(0 0 0 / 10%)',
      }}
      onClick={handleClick}
    >
      {picture && (
        <div className="picture" style={{ height: '100%', width: '100%' }}>
          <img
            className={styles.cover}
            src={`http://localhost:3001/${picture}`}
            style={{ objectFit: 'cover', height: '100%' }}
          ></img>
        </div>
      )}
      <div className={styles.shader}>
        <div
          className={styles.mask}
          style={{
            textOverflow: 'clip',
            width: '80%',
            overflow: 'hidden',
            position: 'relative',
            whiteSpace: 'nowrap',
            color: 'hsla(0,0%,100%,.719)',
          }}
        >
          <span>
            {cardTitle === undefined ? '这是设计测试测试文字啦' : cardTitle}
          </span>
        </div>
      </div>
    </div>
  );
}

interface cardTypes {
  picture?: string;
  cardTitle?: string;
  cardType?: string;
}

export default Card;
