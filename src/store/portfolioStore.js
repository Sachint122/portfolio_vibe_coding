import { create } from 'zustand';
import { applyTheme, getThemeFromStorage } from '../utils/themes';

const usePortfolioStore = create((set) => ({
  openTabs: [{ id: 'welcome', name: 'Welcome', type: 'welcome' }],
  activeTabId: 'welcome',
  activeSidebar: 'explorer',
  expandedFolders: ['root'],
  terminalVisible: false,
  currentTheme: getThemeFromStorage(),
  
  openTab: (tab) => set((state) => {
    const exists = state.openTabs.find(t => t.id === tab.id);
    if (exists) {
      return { activeTabId: tab.id };
    }
    return {
      openTabs: [...state.openTabs, tab],
      activeTabId: tab.id
    };
  }),
  
  closeTab: (tabId) => set((state) => {
    const newTabs = state.openTabs.filter(t => t.id !== tabId);
    let newActiveId = state.activeTabId;
    
    if (state.activeTabId === tabId && newTabs.length > 0) {
      newActiveId = newTabs[newTabs.length - 1].id;
    }
    
    return {
      openTabs: newTabs,
      activeTabId: newActiveId
    };
  }),
  
  setActiveTab: (tabId) => set({ activeTabId: tabId }),
  
  setActiveSidebar: (sidebar) => set((state) => ({
    activeSidebar: state.activeSidebar === sidebar ? null : sidebar
  })),
  
  toggleFolder: (folderId) => set((state) => ({
    expandedFolders: state.expandedFolders.includes(folderId)
      ? state.expandedFolders.filter(id => id !== folderId)
      : [...state.expandedFolders, folderId]
  })),
  
  toggleTerminal: () => set((state) => ({ terminalVisible: !state.terminalVisible })),
  
  setTheme: (themeName) => {
    applyTheme(themeName);
    set({ currentTheme: themeName });
  }
}));

export default usePortfolioStore;
