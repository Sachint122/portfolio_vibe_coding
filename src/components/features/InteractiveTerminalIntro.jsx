import React, { useState, useRef, useEffect } from 'react';
import { VscTerminal, VscChevronRight, VscTrash, VscLinkExternal } from 'react-icons/vsc';
import usePortfolioStore from '../../store/portfolioStore';
import { portfolioData } from '../../data/portfolioData';
import CardTilt3D from '../3d/CardTilt3D';

const INITIAL_LOGS = [
  {
    type: 'system',
    text: "🚀 Terminal Interactive Mode Initialized."
  },
  {
    type: 'system',
    text: "Type a command below or click a quick tag above to explore the portfolio:"
  },
  {
    type: 'hint',
    text: "Available commands: whoami • skills • projects • contact • clear"
  }
];

const InteractiveTerminalIntro = () => {
  const { openTab, toggleTerminal } = usePortfolioStore();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState(INITIAL_LOGS);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const isFirstMount = useRef(true);
  const logsContainerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmdText) => {
    const rawCmd = cmdText.trim();
    if (!rawCmd) return;

    const cmd = rawCmd.toLowerCase();
    setCommandHistory(prev => [...prev, rawCmd]);
    setCmdIndex(-1);

    const userEntry = { type: 'input', text: rawCmd };

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let responseEntries = [];

    switch (cmd) {
      case 'whoami':
        responseEntries = [
          {
            type: 'output',
            title: `👤 ${portfolioData.about.name} - ${portfolioData.about.title}`,
            lines: [
              `Location: ${portfolioData.about.location}`,
              `Focus: Building scalable MERN stack web apps, Enterprise ERPs & RBAC workflows.`,
              `Experience: Web Developer @ Dindia | 1+ Years Professional Experience.`
            ],
            action: {
              label: 'Explore full bio in about.js',
              onClick: () => openTab({ id: 'about', name: 'about.js', type: 'about', language: 'javascript' })
            }
          }
        ];
        break;

      case 'skills':
        responseEntries = [
          {
            type: 'output',
            title: '⚡ Core Technical Stack & Proficiencies',
            lines: [
              '• Frontend: React.js, Tailwind CSS, JavaScript (ES6+), Vite, HTML5/CSS3',
              '• Backend: Node.js, Express.js, RESTful APIs, JWT Auth, Microservices',
              '• Databases: MongoDB, Mongoose, MySQL, SQL Queries & Indexing',
              '• Enterprise: Role-Based Access Control (RBAC), Workflow Automation, CRM',
              '• DevOps: GitHub Actions (CI/CD), Hostinger Cloud, Git, Postman'
            ],
            action: {
              label: 'Launch 3D Orbital Skills Radar',
              onClick: () => openTab({ id: 'skills', name: 'skills.json', type: 'skills', language: 'json' })
            }
          }
        ];
        break;

      case 'projects':
        responseEntries = [
          {
            type: 'output',
            title: '🚀 Featured Production Projects',
            lines: [
              '1. Destination Technologies — Full-featured React educational platform with live placements.',
              '2. Dindia Enterprise ERP — Workforce management with 4 RBAC tiers, CRM & DWR.',
              '3. Dindia Corporate & Infratech — Production commercial platforms with SEO & maps.'
            ],
            action: {
              label: 'Browse all 10+ projects in projects.jsx',
              onClick: () => openTab({ id: 'all-projects', name: 'Projects', type: 'all-projects' })
            }
          }
        ];
        break;

      case 'contact':
        responseEntries = [
          {
            type: 'output',
            title: '📬 Let’s Connect & Collaborate',
            lines: [
              `• Email: ${portfolioData.about.email}`,
              `• Phone/WhatsApp: ${portfolioData.about.phone}`,
              `• GitHub: ${portfolioData.about.github}`,
              `• LinkedIn: ${portfolioData.about.linkedin}`
            ],
            action: {
              label: 'Open Interactive Message Form',
              onClick: () => openTab({ id: 'contact', name: 'contact.jsx', type: 'contact', language: 'react' })
            }
          }
        ];
        break;

      case 'help':
        responseEntries = [
          {
            type: 'output',
            title: '📖 Available Interactive Commands',
            lines: [
              '• whoami    - Developer overview and bio',
              '• skills    - Primary stack and technology proficiencies',
              '• projects  - Production web applications and code',
              '• contact   - Direct email, phone, and social handles',
              '• clear     - Clear terminal history'
            ]
          }
        ];
        break;

      default:
        responseEntries = [
          {
            type: 'error',
            text: `Command not recognized: "${rawCmd}". Type 'help' or click a tag above.`
          }
        ];
        break;
    }

    setHistory(prev => [...prev, userEntry, ...responseEntries]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = cmdIndex === -1 ? commandHistory.length - 1 : Math.max(0, cmdIndex - 1);
        setCmdIndex(nextIndex);
        setInputVal(commandHistory[nextIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandHistory.length > 0 && cmdIndex !== -1) {
        const nextIndex = cmdIndex + 1;
        if (nextIndex >= commandHistory.length) {
          setCmdIndex(-1);
          setInputVal('');
        } else {
          setCmdIndex(nextIndex);
          setInputVal(commandHistory[nextIndex] || '');
        }
      }
    }
  };

  const quickPills = [
    { label: 'whoami', desc: 'About bio' },
    { label: 'skills', desc: 'Tech stack' },
    { label: 'projects', desc: 'Live works' },
    { label: 'contact', desc: 'Reach out' },
    { label: 'clear', desc: 'Reset' }
  ];

  return (
    <CardTilt3D maxTilt={5} className="h-full">
      <div className="relative h-full flex flex-col justify-between rounded-2xl bg-[#0d1117]/95 border border-vscode-border hover:border-vscode-accent/60 shadow-2xl overflow-hidden font-mono group">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-vscode-sidebar/95 border-b border-vscode-border/70 select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-flex items-center justify-center"></span>
            <span className="ml-2 text-xs text-vscode-text/70 flex items-center gap-1.5 font-medium">
              <VscTerminal size={13} className="text-vscode-accent" />
              <span>sachin@portfolio:~ (interactive-cli)</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => executeCommand('clear')}
              title="Clear terminal output"
              className="text-vscode-text/40 hover:text-red-400 p-1 rounded transition-colors"
            >
              <VscTrash size={13} />
            </button>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] bg-vscode-accent/10 border border-vscode-accent/30 text-vscode-accent font-semibold">
              BASH
            </span>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="px-4 py-2 bg-vscode-bg/50 border-b border-vscode-border/40 flex items-center gap-2 overflow-x-auto text-xs [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <span className="text-[11px] text-vscode-text/40 flex-shrink-0 uppercase tracking-wider font-sans">
            Quick Run:
          </span>
          {quickPills.map((pill) => (
            <button
              key={pill.label}
              onClick={() => executeCommand(pill.label)}
              className="flex-shrink-0 px-2.5 py-1 rounded-md bg-vscode-hover hover:bg-vscode-accent/20 border border-vscode-border hover:border-vscode-accent text-vscode-accent hover:text-white transition-all text-xs font-mono active:scale-95 flex items-center gap-1"
            >
              <span className="text-vscode-text/50">$</span>
              <span className="font-semibold">{pill.label}</span>
            </button>
          ))}
        </div>

        {/* Interactive Terminal Output Log */}
        <div 
          ref={logsContainerRef}
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 overflow-y-auto max-h-[220px] sm:max-h-[260px] text-xs leading-relaxed space-y-2.5 cursor-text scrollbar-thin scrollbar-thumb-vscode-border"
        >
          {history.map((item, index) => {
            if (item.type === 'input') {
              return (
                <div key={index} className="flex items-center gap-1.5 text-vscode-text">
                  <span className="text-emerald-400 font-bold">sachin@portfolio:~$</span>
                  <span className="text-vscode-accent font-semibold">{item.text}</span>
                </div>
              );
            }
            if (item.type === 'system') {
              return (
                <div key={index} className="text-vscode-text/60 italic">
                  {item.text}
                </div>
              );
            }
            if (item.type === 'hint') {
              return (
                <div key={index} className="text-purple-400/90 bg-purple-500/10 px-2.5 py-1 rounded border border-purple-500/20">
                  {item.text}
                </div>
              );
            }
            if (item.type === 'error') {
              return (
                <div key={index} className="text-red-400 bg-red-500/10 px-2.5 py-1 rounded border border-red-500/20">
                  ⚠️ {item.text}
                </div>
              );
            }
            if (item.type === 'output') {
              return (
                <div key={index} className="p-2.5 rounded-lg bg-vscode-hover/60 border border-vscode-border/60 space-y-1.5">
                  <p className="font-bold text-cyan-300 flex items-center gap-1.5">
                    {item.title}
                  </p>
                  <div className="space-y-0.5 text-vscode-text/80 pl-1">
                    {item.lines.map((line, lIdx) => (
                      <p key={lIdx}>{line}</p>
                    ))}
                  </div>
                  {item.action && (
                    <button
                      onClick={item.action.onClick}
                      className="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 bg-vscode-accent/20 hover:bg-vscode-accent text-vscode-accent hover:text-white rounded border border-vscode-accent/40 text-[11px] font-semibold transition-all"
                    >
                      <span>{item.action.label}</span>
                      <VscLinkExternal size={11} />
                    </button>
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Live Input Line */}
        <div className="p-3 bg-vscode-sidebar/80 border-t border-vscode-border/60 flex items-center justify-between gap-2">
          <div className="flex-1 flex items-center gap-1.5 min-w-0">
            <VscChevronRight size={14} className="text-emerald-400 flex-shrink-0 animate-pulse" />
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type whoami, skills, projects, contact..."
              className="flex-1 bg-transparent border-none outline-none text-xs text-vscode-text placeholder-vscode-text/30 font-mono"
            />
          </div>

          <button
            onClick={toggleTerminal}
            className="flex-shrink-0 text-[11px] text-vscode-text/50 hover:text-vscode-accent flex items-center gap-1 transition-colors"
            title="Launch full VS Code terminal panel (Ctrl + `)"
          >
            <span>Full CLI</span>
            <kbd className="px-1.5 py-0.5 bg-vscode-bg rounded border border-vscode-border text-[9px]">Ctrl+`</kbd>
          </button>
        </div>
      </div>
    </CardTilt3D>
  );
};

export default React.memo(InteractiveTerminalIntro);
