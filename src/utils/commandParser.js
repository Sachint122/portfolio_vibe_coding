import { portfolioData } from '../data/portfolioData';
import { fileSystem } from '../data/fileSystem';
import { commandsList, getHelpText, getWelcomeText } from '../data/commands';

export const parseCommand = (input, context) => {
  const { openTab, setTheme, clearTerminal, currentDirectory, setCurrentDirectory } = context;

  const trimmedInput = input.trim();
  if (!trimmedInput) return '';

  const parts = trimmedInput.split(' ');
  const command = parts[0].toLowerCase();
  const args = parts.slice(1);

  switch (command) {
    case 'help':
      return getHelpText();

    case 'clear':
      clearTerminal();
      return '';

    case 'ls':
      return listFiles(currentDirectory);

    case 'pwd':
      return `\x1b[36m${currentDirectory}\x1b[0m`;

    case 'cat':
      if (!args[0]) {
        return '\x1b[31mError: Please specify a filename\x1b[0m\r\nUsage: cat [filename]';
      }
      return displayFileContent(args[0], currentDirectory);

    case 'open':
      if (!args[0]) {
        return '\x1b[31mError: Please specify a filename\x1b[0m\r\nUsage: open [filename]';
      }
      return openFile(args[0], openTab, currentDirectory);

    case 'cd':
      if (!args[0]) {
        setCurrentDirectory('/portfolio');
        return '\x1b[33mReturned to /portfolio\x1b[0m';
      }
      return changeDirectory(args[0], setCurrentDirectory, currentDirectory);

    case 'theme':
      if (!args[0]) {
        return `\x1b[33m🎨 Available themes:\x1b[0m
    
\x1b[1;36m━━━ Popular Themes ━━━\x1b[0m
  • \x1b[32mgithubDark\x1b[0m     - GitHub Dark (default)
  • \x1b[35mdracula\x1b[0m        - Dracula
  • \x1b[34moneDark\x1b[0m        - One Dark Pro
  • \x1b[33mmonokai\x1b[0m        - Monokai Pro
  • \x1b[36mnightOwl\x1b[0m       - Night Owl

\x1b[1;36m━━━ Unique Themes ━━━\x1b[0m
  • \x1b[35msynthwave\x1b[0m      - Synthwave 84
  • \x1b[33mcobalt2\x1b[0m        - Cobalt2
  • \x1b[35mpalenight\x1b[0m      - Material Palenight
  • \x1b[35mshadesOfPurple\x1b[0m - Shades of Purple
  • \x1b[33mayuDark\x1b[0m        - Ayu Dark

\x1b[1;36m━━━ Modern Themes ━━━\x1b[0m
  • \x1b[34mtokyoNight\x1b[0m     - Tokyo Night
  • \x1b[36mnord\x1b[0m           - Nord
  • \x1b[33mgruvbox\x1b[0m        - Gruvbox Dark
  • \x1b[34moceanicNext\x1b[0m    - Oceanic Next
  • \x1b[31mhorizon\x1b[0m        - Horizon

\x1b[33mUsage:\x1b[0m theme [name]
\x1b[90mExample: theme dracula\x1b[0m`;
      }
      return changeTheme(args[0], setTheme);

    case 'whoami':
      return `\x1b[1;36m${portfolioData.about.name}\x1b[0m\r\n${portfolioData.about.title}\r\n${portfolioData.about.location}`;

    case 'about':
      openTab({ id: 'about', name: 'about.js', type: 'about', language: 'javascript' });
      return '\x1b[32m✓ Opened about.js in editor\x1b[0m';

    case 'projects':
      openTab({ id: 'all-projects', name: 'Projects', type: 'all-projects' });
      return '\x1b[32m✓ Opened projects overview\x1b[0m';

    case 'skills':
      openTab({ id: 'skills', name: 'skills.json', type: 'skills', language: 'json' });
      return '\x1b[32m✓ Opened skills.json in editor\x1b[0m';

    case 'experience':
      openTab({ id: 'experience', name: 'experience.md', type: 'experience', language: 'markdown' });
      return '\x1b[32m✓ Opened experience.md in editor\x1b[0m';

    case 'contact':
      openTab({ id: 'contact', name: 'contact.jsx', type: 'contact', language: 'react' });
      return '\x1b[32m✓ Opened contact.jsx in editor\x1b[0m';

    case 'download':
      if (args[0] === 'resume') {
        return '\x1b[32m📥 Downloading resume...\x1b[0m\r\n\x1b[33mResume download will be available soon!\x1b[0m';
      }
      return '\x1b[31mError: Unknown file\x1b[0m\r\nUsage: download resume';

    case 'github':
      window.open(portfolioData.about.github, '_blank');
      return `\x1b[32m🚀 Opening GitHub profile...\x1b[0m\r\n${portfolioData.about.github}`;

    case 'linkedin':
      window.open(portfolioData.about.linkedin, '_blank');
      return `\x1b[32m🚀 Opening LinkedIn profile...\x1b[0m\r\n${portfolioData.about.linkedin}`;

    case 'email':
      window.location.href = `mailto:${portfolioData.about.email}`;
      return `\x1b[32m📧 Opening email client...\x1b[0m\r\n${portfolioData.about.email}`;

    // Easter Eggs
    case 'hack':
      return easterEggHack();

    case 'matrix':
      return '\x1b[32mEntering the Matrix...\x1b[0m\r\n\x1b[32m01001101 01000001 01010100 01010010 01001001 01011000\x1b[0m\r\n\x1b[32mWake up, Neo...\x1b[0m';

    case 'sudo':
      if (args.join(' ') === 'make-me-coffee') {
        return '☕ \x1b[33mBrewing coffee...\x1b[0m\r\n\x1b[32m✓ Your coffee is ready!\x1b[0m ☕';
      }
      return '\x1b[31m[sudo] password for user:\x1b[0m (Nice try! 😄)';

    default:
      return `\x1b[31mCommand not found: ${command}\x1b[0m\r\nType '\x1b[32mhelp\x1b[0m' to see available commands.`;
  }
};

const listFiles = (currentDirectory) => {
  let output = '\x1b[1;36mFiles and Folders:\x1b[0m\r\n\r\n';

  if (currentDirectory === '/portfolio/projects') {
    const projectsFolder = fileSystem.children.find(item => item.name === 'projects');
    if (projectsFolder && projectsFolder.children) {
      projectsFolder.children.forEach((file) => {
        const icon = getFileIcon(file.language);
        output += `  ${icon}  ${file.name}\r\n`;
      });
    }
  } else {
    fileSystem.children.forEach((item) => {
      if (item.type === 'folder') {
        output += `  \x1b[1;34m📁 ${item.name}/\x1b[0m\r\n`;
      } else {
        const icon = getFileIcon(item.language);
        output += `  ${icon}  ${item.name}\r\n`;
      }
    });
  }

  return output;
};

const displayFileContent = (filename, currentDirectory) => {
  const file = findFile(filename, currentDirectory);

  if (!file) {
    return `\x1b[31mError: File '${filename}' not found\x1b[0m`;
  }

  if (file.type === 'folder') {
    return `\x1b[31mError: '${filename}' is a directory\x1b[0m\r\nUse 'cd ${filename}' to enter the directory`;
  }

  return `\x1b[36m=== ${file.name} ===\x1b[0m\r\n\r\n${getFilePreview(file)}`;
};

const openFile = (filename, openTab, currentDirectory) => {
  const file = findFile(filename, currentDirectory);

  if (!file) {
    const suggestions = [];

    if (currentDirectory === '/portfolio/projects') {
      const projectsFolder = fileSystem.children.find(item => item.name === 'projects');
      if (projectsFolder && projectsFolder.children) {
        projectsFolder.children.forEach(child => {
          if (child.type === 'file') suggestions.push(child.name);
        });
      }
    } else {
      fileSystem.children.forEach(item => {
        if (item.type === 'file') suggestions.push(item.name);
        if (item.type === 'folder' && item.children) {
          item.children.forEach(child => {
            if (child.type === 'file') suggestions.push(child.name);
          });
        }
      });
    }

    const inputLower = filename.toLowerCase();
    const similar = suggestions.filter(s => {
      const sLower = s.toLowerCase();
      return sLower.includes(inputLower.substring(0, Math.min(4, inputLower.length))) ||
        inputLower.includes(sLower.substring(0, Math.min(4, sLower.length))) ||
        levenshteinDistance(inputLower, sLower) <= 3;
    });

    let output = `\x1b[31mError: File '${filename}' not found\x1b[0m\r\n`;

    if (similar.length > 0) {
      output += `\r\n\x1b[33m💡 Did you mean:\x1b[0m\r\n`;
      similar.slice(0, 3).forEach(s => {
        output += `  \x1b[32m${s}\x1b[0m\r\n`;
      });
    } else {
      output += `\r\n\x1b[33mAvailable files:\x1b[0m\r\n`;
      suggestions.slice(0, 8).forEach(s => {
        output += `  ${s}\r\n`;
      });
    }

    return output;
  }

  if (file.type === 'folder') {
    return `\x1b[31mError: '${filename}' is a directory\x1b[0m\r\nUse 'cd ${filename}' to enter the directory`;
  }

  openTab({
    id: file.id,
    name: file.name,
    type: file.content,
    language: file.language,
    projectId: file.projectId || null
  });

  return `\x1b[32m✓ Opened ${file.name} in editor\x1b[0m`;
};

const changeDirectory = (dirname, setCurrentDirectory, currentDirectory) => {
  const normalizedDir = dirname.toLowerCase().trim().replace(/\/$/, '');

  if (normalizedDir === 'projects') {
    setCurrentDirectory('/portfolio/projects');
    return `\x1b[33mEntered projects directory\x1b[0m\r\n\r\nAvailable projects:\r\n${listProjectFiles()}`;
  }

  if (normalizedDir === '..' || normalizedDir === '../') {
    if (currentDirectory === '/portfolio/projects') {
      setCurrentDirectory('/portfolio');
      return '\x1b[33mReturned to /portfolio\x1b[0m';
    }
    return '\x1b[33mAlready at root directory\x1b[0m';
  }

  if (normalizedDir === '~' || normalizedDir === '/') {
    setCurrentDirectory('/portfolio');
    return '\x1b[33mReturned to /portfolio\x1b[0m';
  }

  return `\x1b[31mError: Directory '${dirname}' not found\x1b[0m`;
};

const changeTheme = (themeName, setTheme) => {
  const validThemes = [
    'githubDark', 'dracula', 'oneDark', 'monokai', 'nightOwl',
    'synthwave', 'cobalt2', 'palenight', 'shadesOfPurple', 'ayuDark',
    'tokyoNight', 'nord', 'gruvbox', 'oceanicNext', 'horizon'
  ];

  if (!validThemes.includes(themeName)) {
    return `\x1b[31mError: Invalid theme '${themeName}'\x1b[0m\r\n\r\n\x1b[33mType 'theme' to see all available themes\x1b[0m`;
  }

  setTheme(themeName);
  return `\x1b[32m✓ Theme changed to ${themeName}\x1b[0m\r\n\x1b[90mTheme applied successfully!\x1b[0m`;
};

const listProjects = (openTab) => {
  let output = '\x1b[1;36mProjects:\x1b[0m\r\n\r\n';

  portfolioData.projects.forEach((project, index) => {
    output += `\x1b[1;32m${index + 1}. ${project.title}\x1b[0m\r\n`;
    output += `   ${project.description.substring(0, 80)}...\r\n`;
    output += `   Tech: ${project.techStack.join(', ')}\r\n`;

    const projectsFolder = fileSystem.children.find(item => item.name === 'projects');
    const projectFile = projectsFolder?.children.find(file => file.projectId === project.id);

    if (projectFile) {
      output += `   \x1b[90mCommand: open ${projectFile.name}\x1b[0m\r\n\r\n`;
    } else {
      output += '\r\n';
    }
  });

  return output;
};

const listProjectFiles = () => {
  const projectsFolder = fileSystem.children.find(item => item.name === 'projects');
  let output = '';

  if (projectsFolder && projectsFolder.children) {
    projectsFolder.children.forEach(file => {
      output += `  ⚛️  ${file.name}\r\n`;
    });
  }

  return output;
};

const findFile = (filename, currentDirectory) => {
  const normalizedFilename = filename.toLowerCase().trim();

  const matchesFilename = (item) => {
    return item.name.toLowerCase() === normalizedFilename;
  };

  if (currentDirectory === '/portfolio/projects') {
    const projectsFolder = fileSystem.children.find(item => item.name === 'projects');
    if (projectsFolder && projectsFolder.children) {
      const file = projectsFolder.children.find(matchesFilename);
      if (file) return file;
    }
  }

  let file = fileSystem.children.find(matchesFilename);
  if (file) return file;

  for (const item of fileSystem.children) {
    if (item.type === 'folder' && item.children) {
      file = item.children.find(matchesFilename);
      if (file) return file;
    }
  }

  return null;
};

const getFileIcon = (language) => {
  const icons = {
    javascript: '📄',
    react: '⚛️',
    json: '{}',
    markdown: '📝',
    typescript: '📘',
    pdf: '📕'
  };
  return icons[language] || '📄';
};

const getFilePreview = (file) => {
  switch (file.content) {
    case 'about':
      return `Name: ${portfolioData.about.name}\r\nTitle: ${portfolioData.about.title}\r\nLocation: ${portfolioData.about.location}\r\n\r\nBio: ${portfolioData.about.bio}`;
    case 'skills':
      return `Frontend: ${portfolioData.skills.frontend.map(s => s.name).join(', ')}\r\nBackend: ${portfolioData.skills.backend.map(s => s.name).join(', ')}\r\nTools: ${portfolioData.skills.tools.map(s => s.name).join(', ')}`;
    case 'project':
      return 'Project file - use "open" command to view in editor';
    case 'experience':
      return `Experience:\r\n${portfolioData.experience.map(exp => `${exp.position} at ${exp.company}`).join('\r\n')}`;
    case 'contact':
      return `Email: ${portfolioData.about.email}\r\nGitHub: ${portfolioData.about.github}\r\nLinkedIn: ${portfolioData.about.linkedin}`;
    case 'resume':
      return 'Resume PDF - use "download resume" command';
    default:
      return 'File content preview...';
  }
};

const levenshteinDistance = (str1, str2) => {
  const len1 = str1.length;
  const len2 = str2.length;
  const matrix = [];

  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[len1][len2];
};

const easterEggHack = () => {
  return `\r
\x1b[32m[*] Initializing hack sequence...\x1b[0m\r
\x1b[32m[*] Connecting to mainframe...\x1b[0m\r
\x1b[32m[*] Bypassing firewall...\x1b[0m\r
\x1b[32m[*] Accessing database...\x1b[0m\r
\x1b[33m[!] ERROR: Access Denied\x1b[0m\r
\x1b[31m[!] Just kidding! I'm a developer, not a hacker 😄\x1b

`
}