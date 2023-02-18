import Header from '../../components/layouts/Header';
import React from 'react';
import About from '../About/about';

export default function Blog() {
  return (
    <div className="container">
      <main>
        <h1>hello</h1>
      </main>
    </div>
  );
}

Blog.getLayout = function getLayout(page: React.ReactElement) {
  return <Header>{page}</Header>;
};
