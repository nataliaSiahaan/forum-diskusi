import React from 'react';
import Forum from './components/Forum';

function App() {
  return (
    <>
      <div className="bg-pink-300 p-9 ">
        <h1 className="font-['Open_Sans'] text-3xl italic font-extrabold tracking-wide text-center">Mulailah berdiskusi dengan sesama teman wanita WeCare Anda</h1>
      </div>

      <div className="mx-64 my-8 p-2">
        <Forum />
      </div>
      
      
    </>
  );
}

export default App;