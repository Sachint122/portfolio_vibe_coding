import { create } from 'zustand';
import { applyTheme, getThemeFromStorage } from '../utils/themes';

const MAX_TABS = 5; // Maximum number of tabs allowed

const usePortfolioStore = create((set) => ({
  openTabs: [{ id: 'welcome', name: 'Welcome', type: 'welcome' }],
  activeTabId: 'welcome',
  activeSidebar: 'explorer',
  expandedFolders: ['root'],
  terminalVisible: false,
  currentTheme: getThemeFromStorage(),
  
  openTab: (tab) => set((state) => {
    const exists = state.openTabs.find(t => t.id === tab.id);
    
    // If tab already exists, just activate it
    if (exists) {
      return { activeTabId: tab.id };
    }
    
    let newTabs = [...state.openTabs];
    
    // If we have reached the max tabs limit, remove the oldest tab (first tab)
    if (newTabs.length >= MAX_TABS) {
      // Remove the first tab (oldest)
      const removedTab = newTabs.shift();
      
      // If the removed tab was active, we need to set a new active tab
      // We'll set the last tab as active after adding the new one
    }
    
    // Add new tab
    newTabs.push(tab);
    
    return {
      openTabs: newTabs,
      activeTabId: tab.id
    };
  }),
  
  closeTab: (tabId) => set((state) => {
    const newTabs = state.openTabs.filter(t => t.id !== tabId);
    
    // Don't allow closing all tabs - keep at least one
    if (newTabs.length === 0) {
      return state;
    }
    
    let newActiveId = state.activeTabId;
    
    // If closing the active tab, switch to the last tab
    if (state.activeTabId === tabId) {
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
