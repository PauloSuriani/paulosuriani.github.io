import React from 'react';
import avatar from '../IMG_20210428_185440_243.png';

function Footer() {
  return (
    <footer className="mx-auto max-w-2xl px-5 pb-10">
      <div className="flex items-center justify-between border-t border-slate-700 pt-6">
        <span className="font-mono text-sm text-slate-400">
          Uberlândia, BR · UTC−3 · open to remote
        </span>
        <img className="w-10 rounded-full sm:w-12" src={avatar} alt="Paulo Vitor Suriani" />
      </div>
    </footer>
  );
}

export default Footer;
