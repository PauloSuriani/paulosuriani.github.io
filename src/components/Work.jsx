import React from 'react';

const jobs = [
  ['2023 – now', 'Full Stack Developer', 'Leilões Brasil Cassiano'],
  ['2022 – 2025', 'Full Stack Developer (freelance)', 'Eletrônicos Inova'],
  ['2011 – 2013', 'Java intern', 'Kyros'],
];

function Work() {
  return (
    <ul className="space-y-3">
      {jobs.map(([period, role, company]) => (
        <li key={company} className="sm:flex sm:items-baseline">
          <span className="block w-28 shrink-0 font-mono text-sm text-slate-400">{period}</span>
          <span className="text-lg">
            {role} <span className="text-slate-400">— {company}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Work;
