export const themes = {
  // CYBERPUNK HIGH-TECH THEMES
  matrixGreen: {
    name: '🟢 Matrix Green',
    colors: {
      bg: '#0d0208',
      sidebar: '#0a0a0a',
      activitybar: '#000000',
      header: '#0a0a0a',
      border: '#00ff41',
      text: '#00ff41',
      accent: '#00ff41',
      hover: '#1a1a1a',
      selection: '#003b00',
    }
  },
  
  neonRed: {
    name: '🔴 Neon Red',
    colors: {
      bg: '#0f0000',
      sidebar: '#1a0000',
      activitybar: '#0a0000',
      header: '#1a0000',
      border: '#ff0040',
      text: '#ff3366',
      accent: '#ff0040',
      hover: '#2a0000',
      selection: '#4d0011',
    }
  },
  
  cyberPurple: {
    name: '🟣 Cyber Purple',
    colors: {
      bg: '#0a0015',
      sidebar: '#0f001f',
      activitybar: '#050010',
      header: '#0f001f',
      border: '#b000ff',
      text: '#d896ff',
      accent: '#b000ff',
      hover: '#1a0030',
      selection: '#2d0052',
    }
  },
  
  electricBlue: {
    name: '🔵 Electric Blue',
    colors: {
      bg: '#000a1a',
      sidebar: '#00101f',
      activitybar: '#000510',
      header: '#00101f',
      border: '#00d9ff',
      text: '#66e0ff',
      accent: '#00d9ff',
      hover: '#001a2d',
      selection: '#003d52',
    }
  },
  
  synthwavePink: {
    name: '🌸 Synthwave Pink',
    colors: {
      bg: '#1a0020',
      sidebar: '#240030',
      activitybar: '#1a0025',
      header: '#240030',
      border: '#ff00ff',
      text: '#ff66ff',
      accent: '#ff00ff',
      hover: '#330040',
      selection: '#4d0066',
    }
  },
  
  toxicGreen: {
    name: '☢️ Toxic Green',
    colors: {
      bg: '#0a1a0a',
      sidebar: '#0f1f0f',
      activitybar: '#051005',
      header: '#0f1f0f',
      border: '#39ff14',
      text: '#b3ff66',
      accent: '#39ff14',
      hover: '#1a2d1a',
      selection: '#1f4d1f',
    }
  },
  
  bloodOrange: {
    name: '🟠 Blood Orange',
    colors: {
      bg: '#1a0a00',
      sidebar: '#2d1500',
      activitybar: '#150a00',
      header: '#2d1500',
      border: '#ff6600',
      text: '#ffaa66',
      accent: '#ff6600',
      hover: '#3d2000',
      selection: '#663300',
    }
  },
  
  deepOcean: {
    name: '🌊 Deep Ocean',
    colors: {
      bg: '#001a33',
      sidebar: '#002040',
      activitybar: '#001429',
      header: '#002040',
      border: '#0099ff',
      text: '#66c2ff',
      accent: '#0099ff',
      hover: '#003d66',
      selection: '#004d80',
    }
  },
  
  // CLASSIC DARK THEMES
  githubDark: {
    name: '🐙 GitHub Dark',
    colors: {
      bg: '#0d1117',
      sidebar: '#161b22',
      activitybar: '#0d1117',
      header: '#161b22',
      border: '#30363d',
      text: '#c9d1d9',
      accent: '#58a6ff',
      hover: '#1c2128',
      selection: '#1f6feb',
    }
  },
  
  dracula: {
    name: '🧛 Dracula',
    colors: {
      bg: '#282a36',
      sidebar: '#21222c',
      activitybar: '#191a21',
      header: '#21222c',
      border: '#44475a',
      text: '#f8f8f2',
      accent: '#bd93f9',
      hover: '#343746',
      selection: '#44475a',
    }
  },
  
  oneDark: {
    name: '⚫ One Dark Pro',
    colors: {
      bg: '#282c34',
      sidebar: '#21252b',
      activitybar: '#1e2227',
      header: '#21252b',
      border: '#181a1f',
      text: '#abb2bf',
      accent: '#61afef',
      hover: '#2c313c',
      selection: '#3e4451',
    }
  },
  
  tokyoNight: {
    name: '🗼 Tokyo Night',
    colors: {
      bg: '#1a1b26',
      sidebar: '#16161e',
      activitybar: '#16161e',
      header: '#16161e',
      border: '#24283b',
      text: '#a9b1d6',
      accent: '#7aa2f7',
      hover: '#1f2335',
      selection: '#283457',
    }
  },
  
  nord: {
    name: '❄️ Nord',
    colors: {
      bg: '#2e3440',
      sidebar: '#3b4252',
      activitybar: '#2e3440',
      header: '#3b4252',
      border: '#434c5e',
      text: '#d8dee9',
      accent: '#88c0d0',
      hover: '#434c5e',
      selection: '#4c566a',
    }
  },
  
  nightOwl: {
    name: '🦉 Night Owl',
    colors: {
      bg: '#011627',
      sidebar: '#001424',
      activitybar: '#001424',
      header: '#001424',
      border: '#1d3b53',
      text: '#d6deeb',
      accent: '#82aaff',
      hover: '#0b2942',
      selection: '#1d3b53',
    }
  },
  
  gruvbox: {
    name: '🟤 Gruvbox Dark',
    colors: {
      bg: '#282828',
      sidebar: '#1d2021',
      activitybar: '#1d2021',
      header: '#1d2021',
      border: '#3c3836',
      text: '#ebdbb2',
      accent: '#fe8019',
      hover: '#3c3836',
      selection: '#504945',
    }
  },
};

export const applyTheme = (themeName) => {
  const theme = themes[themeName];
  if (!theme) return;
  
  const root = document.documentElement;
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
  
  localStorage.setItem('portfolio-theme', themeName);
};

export const getThemeFromStorage = () => {
  return localStorage.getItem('portfolio-theme') || 'nightOwl';
};
