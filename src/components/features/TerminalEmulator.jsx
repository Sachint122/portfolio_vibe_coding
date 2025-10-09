import React, { useEffect, useRef } from 'react';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';
import { useTerminal } from '../../hooks/useTerminal';
import usePortfolioStore from '../../store/portfolioStore';
import { getWelcomeText } from '../../data/commands';

const TerminalEmulator = () => {
  const terminalRef = useRef(null);
  const xtermRef = useRef(null);
  const fitAddonRef = useRef(null);
  const isInitializedRef = useRef(false);
  const { openTab, setTheme, terminalVisible } = usePortfolioStore();
  const { executeCommand, getPreviousCommand, getNextCommand, currentDirectory } = useTerminal(openTab, setTheme);
  
  useEffect(() => {
    if (!terminalRef.current || isInitializedRef.current) return;
    
    const term = new Terminal({
      cursorBlink: true,
      cursorStyle: 'block',
      fontFamily: 'Fira Code, JetBrains Mono, Consolas, monospace',
      fontSize: 14,
      theme: {
        background: '#0d1117',
        foreground: '#c9d1d9',
        cursor: '#58a6ff',
        black: '#0d1117',
        red: '#ff7b72',
        green: '#3fb950',
        yellow: '#d29922',
        blue: '#58a6ff',
        magenta: '#bc8cff',
        cyan: '#76e3ea',
        white: '#c9d1d9',
        brightBlack: '#6e7681',
        brightRed: '#ffa198',
        brightGreen: '#56d364',
        brightYellow: '#e3b341',
        brightBlue: '#79c0ff',
        brightMagenta: '#d2a8ff',
        brightCyan: '#b3f0ff',
        brightWhite: '#f0f6fc',
      },
      allowTransparency: true,
      scrollback: 10000,
      cols: 100,
      rows: 30,
      convertEol: true
    });
    
    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalRef.current);
    
    setTimeout(() => {
      try {
        fitAddon.fit();
      } catch (error) {
        console.warn('Initial fit failed');
      }
    }, 100);
    
    xtermRef.current = term;
    fitAddonRef.current = fitAddon;
    isInitializedRef.current = true;
    
    // Clear and write welcome
    term.clear();
    term.write(getWelcomeText());
    writePrompt(term, currentDirectory);
    
    let currentInput = '';
    
    term.onData((data) => {
      const code = data.charCodeAt(0);
      
      if (code === 13) { // Enter
        term.write('\r\n');
        
        if (currentInput.trim()) {
          const clearTerminal = () => {
            term.clear();
            writePrompt(term, currentDirectory);
          };
          
          const output = executeCommand(currentInput, clearTerminal);
          
          if (output) {
            term.write(output + '\r\n');
          }
        }
        
        currentInput = '';
        writePrompt(term, currentDirectory);
      } else if (code === 127) { // Backspace
        if (currentInput.length > 0) {
          currentInput = currentInput.slice(0, -1);
          term.write('\b \b');
        }
      } else if (code === 27) { // Arrow keys
        if (data === '\x1b[A') { // Up
          const prevCmd = getPreviousCommand();
          if (prevCmd) {
            term.write('\r\x1b[K');
            writePrompt(term, currentDirectory);
            term.write(prevCmd);
            currentInput = prevCmd;
          }
        } else if (data === '\x1b[B') { // Down
          const nextCmd = getNextCommand();
          term.write('\r\x1b[K');
          writePrompt(term, currentDirectory);
          if (nextCmd) {
            term.write(nextCmd);
            currentInput = nextCmd;
          } else {
            currentInput = '';
          }
        }
      } else if (code >= 32 && code <= 126) {
        currentInput += data;
        term.write(data);
      }
    });
    
    return () => {
      if (xtermRef.current) {
        xtermRef.current.dispose();
        xtermRef.current = null;
      }
      isInitializedRef.current = false;
    };
  }, []);
  
  useEffect(() => {
    if (!terminalVisible || !fitAddonRef.current || !xtermRef.current) return;
    
    const handleResize = () => {
      try {
        setTimeout(() => {
          if (fitAddonRef.current && xtermRef.current) {
            fitAddonRef.current.fit();
          }
        }, 50);
      } catch (error) {
        console.warn('Fit failed during resize:', error);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [terminalVisible]);
  
  const writePrompt = (term, dir) => {
    const shortDir = dir === '/portfolio' ? '~' : dir.replace('/portfolio/', '');
    term.write(`\r\n\x1b[1;32msachin@portfolio\x1b[0m:\x1b[1;34m${shortDir}\x1b[0m$ `);
  };
  
  return (
    <div 
      ref={terminalRef} 
      className="h-full w-full p-2"
      style={{ background: '#0d1117' }}
    />
  );
};

export default TerminalEmulator;
