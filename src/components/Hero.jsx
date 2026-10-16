import React from 'react';

function Hero() {
  return (
    <header>
      <h1 className="font-sans font-bold tracking-tight leading-none text-5xl sm:text-7xl">
        Paulo Vitor
        <br />
        Suriani
      </h1>
      <p className="mt-6 font-mono text-lime-300 text-lg sm:text-xl">
        Full stack developer. Back-end first.
      </p>
      <p className="mt-6 text-2xl sm:text-3xl leading-snug text-slate-300">
        I build web systems that hold up in production — APIs, data, deploys, and the
        screens on top.
      </p>
    </header>
  );
}

export default Hero;
