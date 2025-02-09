import React from 'react';
import infiniteSpinner from './assets/infinite-spinner.svg';
const Loading = () => {
  return (
    <div className='d-flex justify-content-center p-5'>
      <img src={infiniteSpinner} style={{width:'100px'}}></img>
    </div>
  );
}

export default Loading;
