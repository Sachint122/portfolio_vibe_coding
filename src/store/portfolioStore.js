import { create } from 'zustand';

const usePortfolioStore = create((set) => ({
  // Theme management
  currentTheme: 'githubDark',
  setTheme: (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    set({ currentTheme: theme });
  },
  
  // Sidebar management
  activeSidebar: 'explorer',
  setActiveSidebar: (sidebar) => set({ activeSidebar: sidebar }),
  toggleSidebar: (sidebar) => set((state) => ({
    activeSidebar: state.activeSidebar === sidebar ? null : sidebar
  })),
  
  // Tab management
  openTabs: [
    { id: 'welcome', name: 'Welcome', type: 'welcome', icon: 'home' }
  ],
  activeTabId: 'welcome',
  
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
    
    if (tabId === state.activeTabId && newTabs.length > 0) {
      const closedIndex = state.openTabs.findIndex(t => t.id === tabId);
      newActiveId = newTabs[Math.min(closedIndex, newTabs.length - 1)]?.id;
    }
    
    return {
      openTabs: newTabs,
      activeTabId: newActiveId
    };
  }),
  
  setActiveTab: (tabId) => set({ activeTabId: tabId }),
  
  // Terminal management
  terminalVisible: false,
  terminalHeight: 300,
  toggleTerminal: () => set((state) => ({
    terminalVisible: !state.terminalVisible
  })),
  setTerminalHeight: (height) => set({ terminalHeight: height }),
  
  // File explorer
  expandedFolders: ['portfolio'],
  toggleFolder: (folderId) => set((state) => ({
    expandedFolders: state.expandedFolders.includes(folderId)
      ? state.expandedFolders.filter(id => id !== folderId)
      : [...state.expandedFolders, folderId]
  })),
}));

export default usePortfolioStore;
