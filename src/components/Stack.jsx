import React from 'react';

const groups = [
  ['Back-end', ['Node.js', 'TypeScript', 'Express', 'Meteor', 'REST']],
  ['DevOps', ['Docker', 'Compose', 'CI/CD', 'Railway', 'Git']],
  ['Data', ['MongoDB', 'MySQL', 'PostgreSQL']],
  ['Front-end', ['React', 'Tailwind', 'Mantine', 'PWA']],
  ['AI', ['Claude Code', 'Anthropic API']],
];

function Stack() {
  return (
    <dl className="space-y-4">
      {groups.map(([area, items]) => (
        <div key={area} className="sm:flex sm:items-baseline">
          <dt className="mb-2 w-28 shrink-0 font-mono text-sm text-slate-400 sm:mb-0">{area}</dt>
          <dd className="flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="bg-lime-900/60 px-2 py-0.5 font-sans text-sm text-lime-100 hover:bg-lime-700"
              >
                {item}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default Stack;
