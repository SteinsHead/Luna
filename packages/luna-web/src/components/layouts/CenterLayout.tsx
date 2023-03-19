// import Image from 'next/legacy/image';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ControlItem from '../../components/fragment/ControlItem';

export default function CenterLayout({ children }: Props) {
  // const [user, setUser] = useState('');
  // const [itemIndex, setItemIndex] = useState('1');
  // useEffect(() => {
  //   const fetchMsg = async () => {
  //     const message = await axios.get('http://localhost:3001/');
  //     return message;
  //   };
  //   fetchMsg().then(res => {
  //     setUser(res.data);
  //   });
  // }, []);
  // const items = {
  //   1: '仪表盘',
  //   2: '博文',
  //   3: '点滴',
  //   4: '评论',
  //   5: '页面',
  //   6: '文件',
  //   7: '说说',
  //   8: '速记',
  //   9: '项目',
  //   10: '朋友们',
  //   11: '数据',
  //   12: '设定',
  //   13: '其他',
  // };
  // return (
  //   <>
  //     <div
  //       className="container"
  //       style={{
  //         display: 'flex',
  //         flexDirection: 'row',
  //         width: '100%',
  //         height: '100vh',
  //       }}
  //     >
  //       {/*  左右排列基本布局  */}
  //       <div
  //         className="left-side"
  //         style={{
  //           width: 250,
  //           backgroundColor: 'rgb(42,148,125)',
  //           display: 'flex',
  //           flexDirection: 'column',
  //         }}
  //       >
  //         <div
  //           className="text-center"
  //           style={{
  //             display: 'flex',
  //             flexDirection: 'row',
  //             justifyContent: 'space-between',
  //             alignItems: 'center',
  //             width: '100%',
  //             padding: '2rem',
  //           }}
  //         >
  //           <button></button>
  //           <h1 style={{ color: 'white' }}>おかえり</h1>
  //           <button></button>
  //         </div>
  //         <div
  //           className="item-options"
  //           style={{
  //             width: '100%',
  //             display: 'flex',
  //             flexDirection: 'column',
  //             paddingLeft: '1rem',
  //             alignItems: 'center',
  //             height: '100%',
  //           }}
  //         >
  //           {Object.keys(items).map(key => {
  //             if (items[key] === '博文') {
  //               return (
  //                 <ControlItem
  //                   key={key}
  //                   itemKey={key}
  //                   context={items[key]}
  //                   currIndex={itemIndex}
  //                   handleIndex={setItemIndex}
  //                   functionLink="/post/post"
  //                 ></ControlItem>
  //               );
  //             }
  //             return (
  //               <ControlItem
  //                 key={key}
  //                 itemKey={key}
  //                 context={items[key]}
  //                 currIndex={itemIndex}
  //                 handleIndex={setItemIndex}
  //               ></ControlItem>
  //             );
  //           })}
  //         </div>
  //         <div
  //           className="userinfo"
  //           style={{
  //             display: 'flex',
  //             flexDirection: 'row',
  //             justifyContent: 'space-between',
  //             alignItems: 'center',
  //             width: '100%',
  //             marginBottom: '1rem',
  //             overflow: 'hidden',
  //             padding: '3rem',
  //           }}
  //         >
  //           <div
  //             className="avatar"
  //             style={{
  //               height: '4rem',
  //               width: '4rem',
  //               borderRadius: '4rem',
  //               position: 'relative',
  //               overflow: 'hidden',
  //             }}
  //           >
  //             <Image src="/avatar.jpg" alt="pic of the author" layout="fill" />
  //           </div>
  //           <div
  //             className="user"
  //             style={{
  //               color: '#606266',
  //               lineHeight: 1.4,
  //               textAlign: 'justify',
  //               fontSize: 16,
  //               fontWeight: 700,
  //             }}
  //           >
  //             <p style={{ margin: 0 }}>{user}</p>
  //           </div>
  //         </div>
  //       </div>
  //       {children}
  //     </div>
  //   </>
  // );
}

interface Props {
  children: React.ReactNode;
}
