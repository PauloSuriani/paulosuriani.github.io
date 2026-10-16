import React from 'react';

const links = [
  ['paulosuriani@gmail.com', 'mailto:paulosuriani@gmail.com'],
  ['LinkedIn', 'https://www.linkedin.com/in/paulo-vitor-suriani'],
  ['GitHub', 'https://github.com/PauloSuriani'],
  ['Resume (EN)', '/resume-paulo-suriani-en.pdf'],
  ['Currículo (PT)', '/curriculo-paulo-suriani-pt.pdf'],
];

function Contact() {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-3 text-xl">
      {links.map(([label, href]) => (
        <li key={label}>
          <a
            className="text-lime-300 underline-offset-4 hover:text-lime-200 hover:underline"
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Contact;
