import { Layout } from 'antd';
import { useEffect, useState } from 'react';
import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import Card from '../../components/content/Card';
import ItemTag from '../../components/fragment/ItemTag';
import axios from 'axios';
import styles from './index.module.css';

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

  useEffect(() => {
    const fetchSaying = async () => {
      const message = await axios.get('https://v1.hitokoto.cn/?c=a');
      const says = `${message.data.hitokoto} ${
        message.data.from_who === null ? '' : '    —— ' + message.data.from_who
      } 《${message.data.from}》`;
      setSaying(says);
    };
    fetchSaying();
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
              {/* {picArr &&
                                Object.keys(picArr).map((key) => <Card key={key} picture={picArr[key]} cardTitle={bookArr[key].substring(0, bookArr[key].length - 3)} cardType={"diary"}></Card>)
                            } */}
              <Card cardType={'diary'}></Card>
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
              {/* {animePicArr &&
                                Object.keys(animePicArr).map((key) => <Card key={key} picture={animePicArr[key]} cardTitle={thinkArr[key].substring(0, thinkArr[key].length - 3)} cardType={"anime"}></Card>)
                            } */}
              <Card cardType={'anime'}></Card>
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
