import React from 'react';
import 'antd/dist/antd.css';
import './style.css';
import '@icon-park/react/styles/index.css';

export default function App({ Component, pageProps }) {
  // used default expression
  // return (
  //     <Component {...pageProps} />
  // );

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || (page => page);

  return getLayout(<Component {...pageProps} />);
}
