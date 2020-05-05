import React, { useState } from 'react';

const Paging = () => {
  const [pageNum, setPageNum] = useState(1);

  const dec = () => setPageNum(prev => prev - 1);
  const inc = () => setPageNum(prev => prev + 1);

  return (
    <>
      <button disabled={pageNum === 1} onClick={dec}>Previous</button>
      <button onClick={inc}>Next</button>
    </>
  );
};


export default Paging;
