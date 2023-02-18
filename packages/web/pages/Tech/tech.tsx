import Header from '../../components/layouts/Header';
import React from 'react';
import Blog from '../Blog/blog';

export default function Tech() {
  return (
    <div className="container">
      <main>
        <h1>hello</h1>
      </main>
    </div>
  );
}

Tech.getLayout = function getLayout(page: React.ReactElement) {
  return <Header>{page}</Header>;
};
