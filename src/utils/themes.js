export const themes = {
  githubDark: {
    name: 'GitHub Dark',
    colors: {
      bg: '#0d1117',
      sidebar: '#161b22',
      header: '#161b22',
      border: '#30363d',
      text: '#c9d1d9',
      accent: '#58a6ff',
      hover: '#1c2128',
      selection: '#1f6feb',
    }
  },
  dracula: {
    name: 'Dracula',
    colors: {
      bg: '#282a36',
      sidebar: '#21222c',
      header: '#191a21',
      border: '#44475a',
      text: '#f8f8f2',
      accent: '#bd93f9',
      hover: '#343746',
      selection: '#44475a',
    }
  },
  oneDark: {
    name: 'One Dark Pro',
    colors: {
      bg: '#282c34',
      sidebar: '#21252b',
      header: '#1e2227',
      border: '#181a1f',
      text: '#abb2bf',
      accent: '#61afef',
      hover: '#2c313c',
      selection: '#3e4451',
    }
  },
  monokai: {
    name: 'Monokai Pro',
    colors: {
      bg: '#2d2a2e',
      sidebar: '#221f22',
      header: '#1a181a',
      border: '#423f42',
      text: '#fcfcfa',
      accent: '#ffd866',
      hover: '#363337',
      selection: '#5b595c',
    }
  },
  nightOwl: {
    name: 'Night Owl',
    colors: {
      bg: '#011627',
      sidebar: '#001424',
      header: '#001424',
      border: '#1d3b53',
      text: '#d6deeb',
      accent: '#82aaff',
      hover: '#0b2942',
      selection: '#1d3b53',
    }
  },
  synthwave: {
    name: 'Synthwave 84',
    colors: {
      bg: '#241b2f',
      sidebar: '#1a1523',
      header: '#1a1523',
      border: '#495495',
      text: '#f92aad',
      accent: '#fede5d',
      hover: '#2a2139',
      selection: '#34294f',
    }
  },
  cobalt2: {
    name: 'Cobalt2',
    colors: {
      bg: '#193549',
      sidebar: '#122738',
      header: '#0d1f2d',
      border: '#1f4662',
      text: '#ffffff',
      accent: '#ffc600',
      hover: '#1f4662',
      selection: '#0d3a58',
    }
  },
  palenight: {
    name: 'Material Palenight',
    colors: {
      bg: '#292d3e',
      sidebar: '#212331',
      header: '#1b1e2b',
      border: '#32374d',
      text: '#a6accd',
      accent: '#c792ea',
      hover: '#32374d',
      selection: '#3f4458',
    }
  },
  shadesOfPurple: {
    name: 'Shades of Purple',
    colors: {
      bg: '#2d2b55',
      sidebar: '#1e1e3f',
      header: '#1e1e3f',
      border: '#4d21fc',
      text: '#a599e9',
      accent: '#fad000',
      hover: '#363466',
      selection: '#4d21fc',
    }
  },
  ayuDark: {
    name: 'Ayu Dark',
    colors: {
      bg: '#0a0e14',
      sidebar: '#01060e',
      header: '#01060e',
      border: '#0f1419',
      text: '#b3b1ad',
      accent: '#ffb454',
      hover: '#0d1016',
      selection: '#253340',
    }
  },
  tokyoNight: {
    name: 'Tokyo Night',
    colors: {
      bg: '#1a1b26',
      sidebar: '#16161e',
      header: '#16161e',
      border: '#24283b',
      text: '#a9b1d6',
      accent: '#7aa2f7',
      hover: '#1f2335',
      selection: '#283457',
    }
  },
  nord: {
    name: 'Nord',
    colors: {
      bg: '#2e3440',
      sidebar: '#2e3440',
      header: '#2e3440',
      border: '#3b4252',
      text: '#d8dee9',
      accent: '#88c0d0',
      hover: '#3b4252',
      selection: '#434c5e',
    }
  },
  gruvbox: {
    name: 'Gruvbox Dark',
    colors: {
      bg: '#282828',
      sidebar: '#1d2021',
      header: '#1d2021',
      border: '#3c3836',
      text: '#ebdbb2',
      accent: '#fe8019',
      hover: '#3c3836',
      selection: '#504945',
    }
  },
  oceanicNext: {
    name: 'Oceanic Next',
    colors: {
      bg: '#1b2b34',
      sidebar: '#141e26',
      header: '#141e26',
      border: '#1f2e38',
      text: '#cdd3de',
      accent: '#6699cc',
      hover: '#1f2e38',
      selection: '#343d46',
    }
  },
  horizon: {
    name: 'Horizon',
    colors: {
      bg: '#1c1e26',
      sidebar: '#16161c',
      header: '#16161c',
      border: '#232530',
      text: '#e3e6ee',
      accent: '#e95678',
      hover: '#232530',
      selection: '#2e303e',
    }
  }
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
  return localStorage.getItem('portfolio-theme') || 'githubDark';
};
