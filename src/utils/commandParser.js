import { portfolioData } from '../data/portfolioData';

export const parseCommand = (input, context) => {
  const args = input.trim().split(' ');
  const command = args[0].toLowerCase();
  const params = args.slice(1);
  
  const { openTab } = context || {};

  switch (command) {
    case 'help':
      return `════════════════════════════════════════════════
         AVAILABLE COMMANDS - HELP MENU         
════════════════════════════════════════════════

  help                Show all available commands
  clear               Clear terminal screen
  ls                  List files and folders
  pwd                 Show current directory
  whoami              Display user information
  
  about               View about section
  projects            List all projects
  skills              View skills
  experience          View work experience
  contact             View contact info
  education           View education
  
  open [page]         Open page (about, skills, projects, etc.)
  cat [file]          Display file contents
  date                Show current date and time
  echo [text]         Print text to terminal
  
  github              Open GitHub profile
  linkedin            Open LinkedIn profile

💡 Tips:
   • Type commands and press Enter
   • Use 'open [page]' to navigate
   • Try 'cat README.md' for info
`;

    case 'about':
      return `
╔═══════════════════════════════════════╗
           ABOUT ME
╚═══════════════════════════════════════╝

Name:     ${portfolioData.about.name}
Title:    ${portfolioData.about.title}
Location: ${portfolioData.about.location}
Email:    ${portfolioData.about.email}

${portfolioData.about.bio}

Use 'open about' to view in detail.
`;

    case 'skills':
      const frontendSkills = portfolioData.skills.frontend.map(s => `  • ${s.name}: ${s.level}%`).join('\n');
      const backendSkills = portfolioData.skills.backend.map(s => `  • ${s.name}: ${s.level}%`).join('\n');
      const toolsSkills = portfolioData.skills.tools.map(s => `  • ${s.name}: ${s.level}%`).join('\n');
      
      return `
╔═══════════════════════════════════════╗
           MY SKILLS
╚═══════════════════════════════════════╝

Frontend Development:
${frontendSkills}

Backend Development:
${backendSkills}

Tools & Technologies:
${toolsSkills}

Use 'open skills' to view interactive version.
`;

    case 'projects':
      const projectsList = portfolioData.projects.map((p, i) => 
        `  ${i + 1}. ${p.title}${p.featured ? ' ⭐' : ''}\n     ${p.description || 'No description'}`
      ).join('\n\n');
      
      return `
╔═══════════════════════════════════════╗
           MY PROJECTS
╚═══════════════════════════════════════╝

${projectsList}

Use 'open projects' to view in detail.
`;

    case 'contact':
      return `
╔═══════════════════════════════════════╗
         CONTACT INFORMATION
╚═══════════════════════════════════════╝

Email:    ${portfolioData.about.email}
GitHub:   ${portfolioData.about.github}
LinkedIn: ${portfolioData.about.linkedin}
WhatsApp: ${portfolioData.about.whatsapp}
Location: ${portfolioData.about.location}

Use 'open contact' to send a message.
`;

    case 'experience':
      const expList = portfolioData.experience.map((exp, i) => 
        `  ${i + 1}. ${exp.position}\n     ${exp.company} | ${exp.duration}\n     ${exp.location}`
      ).join('\n\n');
      
      return `
╔═══════════════════════════════════════╗
         WORK EXPERIENCE
╚═══════════════════════════════════════╝

${expList}

Use 'open experience' to view details.
`;

    case 'education':
      const eduList = portfolioData.education.map((edu, i) => 
        `  ${i + 1}. ${edu.degree}\n     ${edu.institution} | ${edu.year}\n     Grade: ${edu.grade}`
      ).join('\n\n');
      
      return `
╔═══════════════════════════════════════╗
            EDUCATION
╚═══════════════════════════════════════╝

${eduList}
`;

    case 'open':
      if (!params[0]) {
        return `Usage: open [page]

Available pages:
  • about      - About me page
  • skills     - Skills page
  • projects   - Projects page
  • contact    - Contact page
  • experience - Experience page`;
      }
      
      if (!openTab) {
        return 'Error: Navigation not available';
      }
      
      const page = params[0].toLowerCase();
      const pageMap = {
        'about': { id: 'about', name: 'about.js', type: 'about', language: 'javascript' },
        'skills': { id: 'skills', name: 'skills.json', type: 'skills', language: 'json' },
        'projects': { id: 'all-projects', name: 'Projects', type: 'all-projects' },
        'contact': { id: 'contact', name: 'contact.jsx', type: 'contact', language: 'react' },
        'experience': { id: 'experience', name: 'experience.md', type: 'experience', language: 'markdown' },
      };
      
      if (pageMap[page]) {
        openTab(pageMap[page]);
        return `✓ Opening ${page}...`;
      }
      
      return `Error: Unknown page '${page}'

Available pages: about, skills, projects, contact, experience`;

    case 'ls':
      return `
Available Sections:
  📁 about/          About me
  📁 skills/         Technical skills
  📁 projects/       My projects
  📁 contact/        Contact information
  📁 experience/     Work experience
  📁 education/      Education background
  📄 README.md       Portfolio information
`;

    case 'whoami':
      return `${portfolioData.about.name} - ${portfolioData.about.title}`;

    case 'date':
      return new Date().toString();

    case 'echo':
      return params.join(' ') || '';

    case 'clear':
      return 'CLEAR_SCREEN';

    case 'pwd':
      return '/home/portfolio';

    case 'cat':
      if (params[0] === 'README.md') {
        return `
# ${portfolioData.about.name}'s Portfolio

Welcome to my interactive portfolio terminal!

## About
I'm a ${portfolioData.about.title} based in ${portfolioData.about.location}.

## Quick Start
Type 'help' to see all available commands.
Type 'open [page]' to navigate to different sections.

## Features
✓ Interactive Terminal
✓ VS Code Theme
✓ 15 Color Themes
✓ Responsive Design
✓ Real-time Updates

Type 'about' to learn more about me!
`;
      }
      return `cat: ${params[0] || ''}: No such file or directory`;

    case 'github':
      window.open(portfolioData.about.github, '_blank');
      return `✓ Opening GitHub profile...`;

    case 'linkedin':
      window.open(portfolioData.about.linkedin, '_blank');
      return `✓ Opening LinkedIn profile...`;

    default:
      return `Command not found: ${command}

Type 'help' for available commands.`;
  }
};
