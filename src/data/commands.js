import { portfolioData } from './portfolioData';
import { fileSystem } from './fileSystem';

export const commandsList = {
  help: { description: 'Show all available commands', usage: 'help' },
  ls: { description: 'List files in current directory', usage: 'ls' },
  cd: { description: 'Change directory', usage: 'cd [directory]' },
  cat: { description: 'Display file contents', usage: 'cat [filename]' },
  clear: { description: 'Clear terminal screen', usage: 'clear' },
  open: { description: 'Open file in editor', usage: 'open [filename]' },
  theme: { description: 'Change color theme', usage: 'theme [name]' },
  whoami: { description: 'Display current user info', usage: 'whoami' },
  about: { description: 'Show about information', usage: 'about' },
  projects: { description: 'List all projects', usage: 'projects' },
  skills: { description: 'Display skills', usage: 'skills' },
  experience: { description: 'Show work experience', usage: 'experience' },
  contact: { description: 'Show contact information', usage: 'contact' },
  download: { description: 'Download resume', usage: 'download resume' },
  github: { description: 'Open GitHub profile', usage: 'github' },
  linkedin: { description: 'Open LinkedIn profile', usage: 'linkedin' },
  email: { description: 'Open email client', usage: 'email' },
  hack: { description: 'Hack the mainframe', usage: 'hack' },
  matrix: { description: 'Enter the Matrix', usage: 'matrix' },
};

export const getHelpText = () => {
  const commands = [
    { name: 'help', desc: 'Show all available commands' },
    { name: 'clear', desc: 'Clear terminal screen' },
    { name: 'ls', desc: 'List files and folders' },
    { name: 'cd [dir]', desc: 'Change directory' },
    { name: 'cat [file]', desc: 'Display file contents' },
    { name: 'open [file]', desc: 'Open file in editor' },
    { name: '', desc: '' },
    { name: 'about', desc: 'View about section' },
    { name: 'projects', desc: 'List all projects' },
    { name: 'skills', desc: 'View skills' },
    { name: 'experience', desc: 'View work experience' },
    { name: 'contact', desc: 'View contact info' },
    { name: '', desc: '' },
    { name: 'theme [name]', desc: 'Change theme' },
    { name: 'download resume', desc: 'Download resume' },
    { name: 'github', desc: 'Open GitHub' },
    { name: 'linkedin', desc: 'Open LinkedIn' },
    { name: 'email', desc: 'Send email' },
    { name: '', desc: '' },
    { name: 'whoami', desc: 'User info' },
    { name: 'hack', desc: 'Easter egg' },
    { name: 'matrix', desc: 'Easter egg' },
  ];

  let output = '\r\n';
  output += '\x1b[1;36m════════════════════════════════════════════════\x1b[0m\r\n';
  output += '\x1b[1;36m         AVAILABLE COMMANDS - HELP MENU         \x1b[0m\r\n';
  output += '\x1b[1;36m════════════════════════════════════════════════\x1b[0m\r\n';
  output += '\r\n';

  commands.forEach(cmd => {
    if (cmd.name === '') {
      output += '\r\n';
    } else {
      const nameFormatted = cmd.name.padEnd(20);
      output += `  \x1b[1;32m${nameFormatted}\x1b[0m ${cmd.desc}\r\n`;
    }
  });

  output += '\r\n';
  output += '\x1b[1;33m💡 Tips:\x1b[0m\r\n';
  output += '   • Use UP/DOWN arrows for command history\r\n';
  output += '   • Tab for auto-completion (coming soon)\r\n';
  output += '\r\n';

  return output;
};

export const getWelcomeText = () => {
  return `
\x1b[1;36m════════════════════════════════════════════════\x1b[0m
  \x1b[1;37mSachin Tiwari - Portfolio Terminal\x1b[0m
  \x1b[37mMERN Stack Developer | Varanasi, India\x1b[0m
\x1b[1;36m════════════════════════════════════════════════\x1b[0m

\x1b[1;33m⚡ Quick Commands:\x1b[0m
  \x1b[32mhelp\x1b[0m      - Show all commands
  \x1b[32mabout\x1b[0m     - Learn about me
  \x1b[32mprojects\x1b[0m  - View my projects
  \x1b[32mls\x1b[0m        - List files
`;
};
