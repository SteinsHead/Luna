import styles from './Footer.module.css';
// import localFont from '@next/font/local';

// const myFont = localFont({ src: './RocknRollOne-Regular.ttf', weight: '700' });

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        {/* <p className={myFont.className} style={{ marginBottom: 0 }}>
          Shadow Luna ©2022 Created by Christina
        </p> */}
      </div>
    </>
  );
}
