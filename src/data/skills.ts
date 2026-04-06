import { SkillCategory } from './types';

export const skills: SkillCategory[] = [
  {
    category: 'Markup & Style',
    skills: [
      { name: 'HTML5', level: 'high' },
      { name: 'CSS3', level: 'high' },
      { name: 'Sass/SCSS', level: 'high' },
    ],
  },
  {
    category: 'JavaScript',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'high' },
      { name: 'TypeScript', level: 'mid' },
    ],
  },
  {
    category: 'Framework & Library',
    skills: [
      { name: 'React', level: 'mid' },
      { name: 'styled-components', level: 'high' },
      { name: 'jQuery', level: 'high' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 'mid' },
      { name: 'Figma', level: 'mid' },
      { name: 'Zeplin', level: 'mid' },
    ],
  },
];
