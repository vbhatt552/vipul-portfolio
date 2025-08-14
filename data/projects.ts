export interface Project {
  title: string;
  description: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'PrepByAI',
    description:
      'AI-powered voice interview simulator with real-time feedback and analytics using Next.js, Tailwind CSS, and Gemini API.',
    link: 'https://prepby-ai.vercel.app/',
    slug: 'prepbyai',
  },
  {
    title: 'AutoFixAI',
    description:
      'AI-powered code debugger built on MERN stack and OpenAI API for real-time bug detection and intelligent code corrections.',
    link: 'https://github.com/vbhatt552/AUTOFIXAI',
    slug: 'autofixai',
  },
  {
    title: 'AI Summarizer Extension',
    description:
      'A Chrome extension that summarizes blogs, news, and academic content using OpenAI API for quick reading.',
    link: 'https://github.com/vbhatt552/ai-summarizer-extension',
    slug: 'ai-summarizer-extension',
  },
  {
    title: 'Spotify Clone',
    description:
      'A responsive Spotify clone built with React and Tailwind CSS, featuring a clean UI and smooth user experience.',
    link: 'https://github.com/vbhatt552/music-player',
    slug: 'spotify-clone',
  },
 { title: 'Dynamic CRM Table',
    description:
      'An interactive, customizable CRM-style data table with global search, column management, inline editing, and export features, built using React and Vite.',
    link: 'https://crm-table-cyan.vercel.app/',
    slug: 'dynamic-crm-table',
},
 {
    title: 'HealthTick Calendar',
    description:
      'A sleek scheduling app with onboarding and recurring follow-up booking system, built using React, TypeScript, Tailwind CSS, and Firebase Firestore.',
    link: 'https://healthtick-calendar-five.vercel.app/',
    slug: 'healthtick-calendar',
  },
];
