import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import KeepAlive from 'react-activation';
import './App.css';
// import Side from '@components/Side'
// import Header from './components/Header'
// import Cloud from '@components/Cloud'
// import Action from '@components/Action'
import Home from './pages/Home';
// import Project from '@/pages/Project'
// import Book from '@/pages/Book'
// import Inspiration from '@/pages/Inspiration'
// import Friend from '@/pages/Friend'
// import About from '@/pages/About'
import Post from './pages/Post';
// import { getLocation } from '@/utils'
// import { visitorStatistics } from '@utils/service'
import { motion, AnimatePresence } from 'framer-motion';
import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';

const ZeroRoutes = () => {
  const location = useLocation();

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src =
  //     'https://cdn.jsdelivr.net/gh/SteinsHead/live-waifu@latest/autoload.js';
  //   document.body.appendChild(script);
  // }, []);

  return (
    <Routes location={location}>
      <Route
        path={'/'}
        element={<KeepAlive cacheKey="Home">{<Home />}</KeepAlive>}
      />
      {/* <Route path={'/project'} element={<Project />} />
          <Route path={'/book'} element={<Book />} />
          <Route path={'/inspiration'} element={<Inspiration />} />
          <Route path={'/friend'} element={<Friend />} />
          <Route path={'/about'} element={<About />} /> */}
      <Route path={'/post/:num'} element={<Post />} />
    </Routes>
  );
};

const App = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === 'Control') {
        setVisible(true);
      }
    };

    const handleKeyUp = (event: any) => {
      if (event.key === 'Control') {
        setVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="app">
      <AnimatePresence>
        {visible && (
          <motion.div
            className="control-tab"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2,
                },
              },
            }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <div className="inner-tab"></div>
          </motion.div>
        )}
      </AnimatePresence>
      <ZeroRoutes />
    </div>
  );
};
export default App;
