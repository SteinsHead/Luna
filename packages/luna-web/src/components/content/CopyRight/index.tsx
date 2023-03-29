import styles from './CopyRight.module.css';

export default function CopyRight({ copyRouter }: CopyType) {
  return (
    <>
      <section className={styles.footer}>
        <p>文章标题: 这篇文章没有标题</p>
        <p>文章作者: Christina</p>
        <p>文章链接: {copyRouter.asPath}</p>
        <p>最后修改时间: 默认没有最后修改时间</p>
        <hr className={styles.sectionLine} />
        <div>
          <p>
            商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，未经站长允许不得对文章文字内容进行修改演绎。
            <br />
            本文采用
            <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
              创作共用保留署名-非商业-禁止演绎4.0国际许可证
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

interface CopyType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  copyRouter?: any;
}
