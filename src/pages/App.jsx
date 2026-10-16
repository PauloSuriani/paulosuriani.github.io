import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Stack from '../components/Stack';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-serif antialiased">
      <main className="mx-auto max-w-2xl px-5 pt-16 pb-10 sm:pt-24">
        <Hero />

        <Section label="/now">
          <p className="text-xl leading-relaxed text-slate-300">
            Building an online auction platform end to end at{' '}
            <span className="text-slate-100">Leilões Brasil Cassiano</span> — TypeScript,
            Meteor, React, MongoDB. Claude Code daily; I review every line it writes.
          </p>
        </Section>

        <Section label="/stack">
          <Stack />
        </Section>

        <Section label="/work">
          <Work />
        </Section>

        <Section label="/contact">
          <Contact />
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
