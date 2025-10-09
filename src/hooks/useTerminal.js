import { useState, useCallback } from 'react';
import { parseCommand } from '../utils/commandParser';

export const useTerminal = (openTab, setTheme) => {
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentDirectory, setCurrentDirectory] = useState('/portfolio'); // Add this
  
  const executeCommand = useCallback((input, clearTerminal) => {
    // Add to history
    if (input.trim()) {
      setCommandHistory(prev => [...prev, input]);
      setHistoryIndex(-1);
    }
    
    const context = {
      openTab,
      setTheme,
      clearTerminal,
      currentDirectory,        // Pass current directory
      setCurrentDirectory      // Pass setter
    };
    
    return parseCommand(input, context);
  }, [openTab, setTheme, currentDirectory]);
  
  const getPreviousCommand = useCallback(() => {
    if (commandHistory.length === 0) return '';
    
    const newIndex = historyIndex === -1 
      ? commandHistory.length - 1 
      : Math.max(0, historyIndex - 1);
    
    setHistoryIndex(newIndex);
    return commandHistory[newIndex] || '';
  }, [commandHistory, historyIndex]);
  
  const getNextCommand = useCallback(() => {
    if (historyIndex === -1) return '';
    
    const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
    setHistoryIndex(newIndex);
    
    if (newIndex === commandHistory.length - 1) {
      setHistoryIndex(-1);
      return '';
    }
    
    return commandHistory[newIndex] || '';
  }, [commandHistory, historyIndex]);
  
  return {
    executeCommand,
    commandHistory,
    getPreviousCommand,
    getNextCommand,
    currentDirectory
  };
};
