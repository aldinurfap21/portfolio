// src/data/skillsData.ts

export const skillCategories = [
  {
    title: 'Frontend',
    color: 'bg-yellow-50 dark:bg-yellow-900/20',
    dotColor: 'bg-yellow-500',
    description: 'React, Vue.js, Next.js, Tailwind CSS',
  },
  {
    title: 'Backend',
    color: 'bg-purple-50 dark:bg-purple-900/20',
    dotColor: 'bg-purple-600',
    description: 'PHP, Laravel, CodeIgniter, Node.js, Express',
  },
  {
    title: 'DevOps',
    color: 'bg-gray-50 dark:bg-gray-800/50',
    dotColor: 'bg-gray-600',
    description: 'Linux, Git, MySQL, MongoDB',
  },
];

export const currentFocus = [
  { label: 'Primary', value: 'JavaScript & PHP' },
  { label: 'Environment', value: 'Linux & Windows' },
  { label: 'Approach', value: 'Full-Stack' },
  { 
    label: 'Learning', 
    value: 'Always Evolving', 
    className: 'text-purple-600 dark:text-purple-400' 
  },
];