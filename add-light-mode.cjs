const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/Projects.jsx',
  'src/pages/People.jsx',
  'src/components/projects/ProjectsHeader.jsx',
  'src/components/projects/ProjectsFilterBar.jsx',
  'src/components/projects/ProjectCard.jsx',
  'src/components/projects/ProjectModal.jsx',
  'src/components/projects/FeaturedProjects.jsx',
  'src/components/people/PeopleHeader.jsx',
  'src/components/people/FacultyCard.jsx',
  'src/components/people/MemberCard.jsx',
];

const patterns = [
  // Backgrounds
  [/(?<!dark:)bg-slate-950(\/[0-9]+)?/g, 'bg-slate-50 dark:$&'],
  [/(?<!dark:)bg-slate-900(\/[0-9]+)?/g, 'bg-white dark:$&'],
  [/(?<!dark:)bg-slate-800(\/[0-9]+)?/g, 'bg-slate-100 dark:$&'],
  [/(?<!dark:)bg-slate-700(\/[0-9]+)?/g, 'bg-slate-200 dark:$&'],
  
  // Borders
  [/(?<!dark:)border-slate-900(\/[0-9]+)?/g, 'border-slate-200 dark:$&'],
  [/(?<!dark:)border-slate-800(\/[0-9]+)?/g, 'border-slate-200 dark:$&'],
  [/(?<!dark:)border-slate-700(\/[0-9]+)?/g, 'border-slate-300 dark:$&'],
  
  // Texts
  [/(?<!dark:)text-slate-500(\/[0-9]+)?/g, 'text-slate-500 dark:$&'],
  [/(?<!dark:)text-slate-400(\/[0-9]+)?/g, 'text-slate-600 dark:$&'],
  [/(?<!dark:)text-slate-300(\/[0-9]+)?/g, 'text-slate-700 dark:$&'],
  [/(?<!dark:)text-white/g, 'text-slate-900 dark:text-white'],
  
  // Gradients
  [/(?<!dark:)from-slate-950/g, 'from-slate-50 dark:from-slate-950'],
  [/(?<!dark:)to-slate-950(\/[0-9]+)?/g, 'to-slate-50 dark:$&'],
  [/(?<!dark:)from-slate-800(\/[0-9]+)?/g, 'from-slate-100 dark:$&'],
  [/(?<!dark:)via-slate-900(\/[0-9]+)?/g, 'via-white dark:$&'],
];

files.forEach(f => {
  const p = path.join(__dirname, f);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    // Apply normal mapping
    patterns.forEach(([regex, replace]) => {
      content = content.replace(regex, replace);
    });

    // Heuristics: revert `text-slate-900 dark:text-white` back to `text-white` when inside a dark button component.
    // E.g., a blue specific button `bg-blue-600 text-slate-900 dark:text-white` -> `bg-blue-600 ... text-white`
    content = content.replace(/bg-blue-600[^"]*?text-slate-900 dark:text-white/g, (match) => {
      return match.replace('text-slate-900 dark:text-white', 'text-white');
    });

    content = content.replace(/text-slate-900 dark:text-white(?=.*?(bg-blue-600|rounded-full bg-slate-800 text-slate-400 hover:text-white|hover:bg-blue-500 text-white))/g, 'text-white');

    fs.writeFileSync(p, content, 'utf8');
    console.log(`Updated ${f}`);
  } else {
    console.log(`Missing ${f}`);
  }
});
