import CenterLayout from '../../components/layouts/CenterLayout';
import React from 'react';

export default function Center() {
  return (
    <>
      <div className="right-side" style={{ flex: 1 }}>
        这里还在建设中哦~
      </div>
    </>
  );
}

Center.getLayout = function getLayout(page: React.ReactElement) {
  return <CenterLayout>{page}</CenterLayout>;
};
