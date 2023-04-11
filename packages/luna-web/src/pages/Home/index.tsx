import { Layout } from 'antd';
import { useEffect, useState, useRef } from 'react';
import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import Card from '../../components/content/Card';
import ItemTag from '../../components/fragment/ItemTag';
import axios from 'axios';
import styles from './index.module.css';

import { formatIssue } from '../../utils/format';
import { useNavigate } from 'react-router-dom';
import { Issue, Hot } from '../../type';
import { queryArchive, queryIssueByLabel } from '../../utils/service';
import { useLoading } from '../../utils/hook';
import { error } from 'console';

const { Content } = Layout;

interface SayingType {
  id: number;
  uuid: string;
  hitokoto: string;
  type: string;
  from: string;
  from_who: string;
  creator: string;
  creator_uid: number;
  reviewer: number;
  commit_from: string;
  created_at: string;
  length: number;
}

export default function Home() {
  const [picArr, setPicArr] = useState({});
  const [thinkArr, setAnimeArr] = useState([]);
  const [animePicArr, setAnimePicArr] = useState({});
  const [doArr, setDoArr] = useState({});
  const [bookArr, setBookArr] = useState([]);
  const [saying, setSaying] = useState('');

  // useEffect(() => {
  //     const script = document.createElement("script");
  //     script.src = "https://cdn.jsdelivr.net/gh/SteinsHead/live-waifu@latest/autoload.js";
  //     document.body.appendChild(script);
  // }, []);

  // useEffect(() => {
  //     const fetchBooks = async () => {
  //         const message_book = await axios.get('http://localhost:3001/books');
  //         setBookArr(message_book.data);
  //         const message_pic = await axios.get(`http://localhost:3001/think?number=${message_book.data.length}`);
  //         setPicArr(message_pic.data);
  //     }
  //     fetchBooks();
  // }, []);

  // useEffect(() => {
  //     const fetchThink = async () => {
  //         const message_anime = await axios.get('http://localhost:3001/anime')
  //         setAnimeArr(message_anime.data);
  //         const message_pic = await axios.get(`http://localhost:3001/think?number=${message_anime.data.length}`);
  //         setAnimePicArr(message_pic.data);
  //     };
  //     fetchThink();
  // }, []);

  // useEffect(() => {
  //     const fetchDo = async () => {
  //         const message = await axios.get('http://localhost:3001/think')
  //         setDoArr(message.data);
  //     };
  //     fetchDo();
  // }, []);

  const navigate = useNavigate();
  const loading = useLoading();
  const [page, setPage] = useState(1);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [dreamloop, setDreamloop] = useState<Issue[]>([]);
  const [magic, setMagic] = useState<Issue[]>([]);
  const [hot, setHot] = useState<Hot>({});
  const maskRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<any>(null);
  const timerRef = useRef<number>();
  const loadingRef = useRef<boolean>(false);
  const finishedRef = useRef<boolean>(false);
  const unactiveRef = useRef<boolean>(false);
  const [maskHeight, setMaskHeight] = useState(0);
  const [maskTop, setMaskTop] = useState(0);

  const handleQuery = (handle: string, label: string) => {
    loadingRef.current = true;
    // queryArchive(page)
    //   .then(async data => {
    //     if (page === 1) {
    //       await loading();
    //     }

    //     if (data.length) {
    //       data = data.map(formatIssue);
    //       console.log(data);
    //       setIssues([...issues, ...data]);
    //       console.log(issues);
    //     } else {
    //       finishedRef.current = true;
    //     }

    //     if (maskHeight === 0) {
    //       setTimeout(() => {
    //         const target = listRef.current?.firstChild;
    //         if (target) {
    //           calcMaskPos(target);
    //         }
    //       }, 100);
    //     }
    //   })
    //   .catch(console.error)
    //   .finally(() => {
    //     loadingRef.current = false;
    //   });
    queryIssueByLabel(label)
      .then(async data => {
        if (data.length) {
          data = data.map(formatIssue);
          console.log(data);
          if (handle === 'dream') {
            setDreamloop([...dreamloop, ...data]);
          }
          if (handle === 'magic') {
            setMagic([...magic, ...data]);
          }
        }
      })
      .catch(console.error)
      .finally(() => {
        loadingRef.current = false;
      });
  };

  useEffect(() => {
    handleQuery('dream', '梦境回环');
    handleQuery('magic', '魔法世界');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const calcMaskPos = (target: any) => {
    if (!hoverRef.current) {
      hoverRef.current = target;
    }
    const { clientHeight, offsetTop } = target;
    const paddingTop =
      document.documentElement.clientWidth > 1024 ? 3 * 16 : 2 * 16;
    const realTop = offsetTop + paddingTop;
    if (maskHeight === clientHeight && maskTop === realTop) return;
    setMaskHeight(clientHeight);
    setMaskTop(realTop);
  };

  const handleScrollAndResize = () => {
    if (unactiveRef.current) return;
    clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      if (hoverRef.current) {
        calcMaskPos(hoverRef.current);
      }
    }, 100);
    // load more
    if (loadingRef.current || finishedRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight > scrollHeight - 100) {
      loadingRef.current = true; // fix frequent loading
      setPage(page => page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollAndResize, false);
    window.addEventListener('resize', handleScrollAndResize, false);
    return () => {
      window.removeEventListener('scroll', handleScrollAndResize, false);
      window.removeEventListener('resize', handleScrollAndResize, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Layout
        className="layout"
        style={{
          borderRadius: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.35)',
        }}
      >
        <Header />
        <Content
          style={{ margin: '3rem 8rem', overflow: 'hidden', padding: '2rem' }}
        >
          <div
            className="site-layout-content"
            style={{
              margin: '0 auto',
              maxWidth: '100rem',
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              borderRadius: 10,
              boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 12px 0px',
            }}
          >
            <div
              className="outline"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <ItemTag TagName={'日记随笔'}></ItemTag>
              <ItemTag TagSource={'Right'}></ItemTag>
            </div>
            <div className={styles.container}>
              {dreamloop.length !== 0 &&
                dreamloop.map(issue => {
                  return (
                    <Card
                      key={issue.id}
                      cardTitle={issue.title}
                      cardType={'diary'}
                    ></Card>
                  );
                })}
            </div>
            <div
              className="outline"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <ItemTag TagName={'动漫杂谈'}></ItemTag>
              <ItemTag TagSource={'Right'}></ItemTag>
            </div>
            <div className={styles.container}>
              {magic.length !== 0 &&
                magic.map(issue => {
                  return (
                    <Card
                      key={issue.id}
                      cardTitle={issue.title}
                      cardType={'diary'}
                    ></Card>
                  );
                })}
            </div>
            <div
              className="container"
              style={{
                display: 'flex',
                marginTop: '4rem',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <img
                src="http://ghchart.rshah.org/SteinsHead"
                alt="2022 Github chart"
                style={{ width: 600 }}
              />
              <div
                className="right-container"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}
              >
                <img
                  src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=SteinsHead&layout=compact&theme=buefy"
                  alt=""
                  style={{ width: 300, marginBottom: 10 }}
                />
                <img
                  src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=SteinsHead&count_private=true&show_icons=true&count_private=true&theme=buefy"
                  alt=""
                  style={{ width: 300, marginTop: 10 }}
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '6rem',
                fontSize: '1.5rem',
                fontWeight: 600,
              }}
            >
              <p>{saying}</p>
            </div>
          </div>
        </Content>
        <Footer />
      </Layout>
    </>
  );
}
