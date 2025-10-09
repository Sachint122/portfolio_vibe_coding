import { useEffect } from 'react';
import usePortfolioStore from '../store/portfolioStore';
import { themes, availableThemes } from '../data/themes';

export const useTheme = () => {
  const { currentTheme, setTheme } = usePortfolioStore();

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('theme') || 'githubDark';
    if (savedTheme !== currentTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const switchTheme = (themeId) => {
    if (themes[themeId]) {
      setTheme(themeId);
    }
  };

  return {
    currentTheme,
    currentThemeData: themes[currentTheme],
    availableThemes,
    setTheme: switchTheme,
  };
};
