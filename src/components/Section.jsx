import React from 'react';

function Section({ label, children }) {
  return (
    <section className="mt-16 border-t border-slate-700 pt-6">
      <h2 className="mb-5 font-mono text-sm text-lime-400">{label}</h2>
      {children}
    </section>
  );
}

export default Section;
