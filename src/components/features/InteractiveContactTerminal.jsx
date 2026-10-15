import React, { useState, useRef, useEffect } from 'react';
import { 
  VscTerminal, 
  VscSend, 
  VscCheck, 
  VscError, 
  VscLinkExternal, 
  VscCopy, 
  VscRefresh,
  VscMail,
  VscGithub
} from 'react-icons/vsc';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const EMAILJS_CONFIG = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_onvylkb',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_6ejmy03',
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'nSxlhbW-UkIq6PJvz'
};

const InteractiveContactTerminal = ({ about = {} }) => {
  const [commandInput, setCommandInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'ANTIGRAVITY CONTACT PROTOCOL [v2.4.0-PROD] — INITIALIZED',
      time: 'SYSTEM_OK'
    },
    {
      type: 'info',
      text: 'Type a command or click an option below to connect with Sachin Tiwari directly:',
      time: 'READY'
    }
  ]);

  // Direct Message Transmission State inside Terminal
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [copiedItem, setCopiedItem] = useState(null);

  const terminalEndRef = useRef(null);

  const scrollToBottom = () => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history, showMessageForm, submitStatus]);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(key);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    const timestamp = new Date().toLocaleTimeString();

    if (!cleanCmd) return;

    // Add user command to history
    const newHistory = [...history, { type: 'input', text: `$ ${cleanCmd}`, time: timestamp }];

    switch (cleanCmd) {
      case '1':
      case 'email':
      case 'email --send':
        newHistory.push({
          type: 'output',
          component: (
            <div className="p-3 my-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-xs font-mono space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold">
                <VscMail size={16} />
                <span>DIRECT EMAIL PROTOCOL</span>
              </div>
              <div className="text-vscode-text">
                Address: <span className="text-white font-bold">{about.email || 'sachintiwari.751858@gmail.com'}</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={`mailto:${about.email || 'sachintiwari.751858@gmail.com'}`}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold transition-colors"
                >
                  <span>Launch Mail App</span>
                  <VscLinkExternal size={11} />
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(about.email, 'email')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-vscode-hover border border-vscode-border text-vscode-text hover:text-vscode-accent transition-colors"
                >
                  <VscCopy size={12} />
                  <span>{copiedItem === 'email' ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>
            </div>
          ),
          time: timestamp
        });
        break;

      case '2':
      case 'linkedin':
      case 'linkedin --connect':
        newHistory.push({
          type: 'output',
          component: (
            <div className="p-3 my-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-xs font-mono space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold">
                <FaLinkedin size={16} />
                <span>LINKEDIN NETWORK PROTOCOL</span>
              </div>
              <div className="text-vscode-text">
                URL: <span className="text-blue-300 underline">{about.linkedin || 'https://www.linkedin.com/in/sachin-tiwari-javafullstack/'}</span>
              </div>
              <div className="pt-1">
                <a
                  href={about.linkedin || 'https://www.linkedin.com/in/sachin-tiwari-javafullstack/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors"
                >
                  <span>Open LinkedIn Profile</span>
                  <VscLinkExternal size={12} />
                </a>
              </div>
            </div>
          ),
          time: timestamp
        });
        break;

      case '3':
      case 'github':
      case 'github --view':
        newHistory.push({
          type: 'output',
          component: (
            <div className="p-3 my-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-xs font-mono space-y-2">
              <div className="flex items-center gap-2 text-purple-400 font-bold">
                <VscGithub size={16} />
                <span>GITHUB REPOSITORIES PROTOCOL</span>
              </div>
              <div className="text-vscode-text">
                Profile: <span className="text-purple-300 underline">{about.github || 'https://github.com/Sachint122'}</span>
              </div>
              <div className="pt-1">
                <a
                  href={about.github || 'https://github.com/Sachint122'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-purple-600 hover:bg-purple-700 text-white font-bold transition-colors"
                >
                  <span>Open GitHub Codebase</span>
                  <VscLinkExternal size={12} />
                </a>
              </div>
            </div>
          ),
          time: timestamp
        });
        break;

      case '4':
      case 'whatsapp':
      case 'whatsapp --chat':
        newHistory.push({
          type: 'output',
          component: (
            <div className="p-3 my-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <FaWhatsapp size={16} />
                <span>WHATSAPP INSTANT CHAT</span>
              </div>
              <div className="text-vscode-text">
                Target: <span className="text-emerald-300 font-bold">+91 8081731062</span>
              </div>
              <div className="pt-1">
                <a
                  href={`https://wa.me/${(about.whatsapp || '+918081731062').replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors"
                >
                  <span>Start WhatsApp Conversation</span>
                  <VscLinkExternal size={12} />
                </a>
              </div>
            </div>
          ),
          time: timestamp
        });
        break;

      case 'msg':
      case 'send-message':
      case 'compose':
        setShowMessageForm(true);
        newHistory.push({
          type: 'info',
          text: 'Direct transmission form opened below. Complete parameters to dispatch email directly.',
          time: timestamp
        });
        break;

      case 'clear':
      case 'cls':
        setHistory([
          {
            type: 'system',
            text: 'TERMINAL CLEARED. Ready for commands.',
            time: 'RESET'
          }
        ]);
        return;

      case 'help':
        newHistory.push({
          type: 'info',
          text: 'Available Commands: email, linkedin, github, whatsapp, send-message, clear, help',
          time: timestamp
        });
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cleanCmd}". Type "help" or select a chip below.`,
          time: timestamp
        });
        break;
    }

    setHistory(newHistory);
    setCommandInput('');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: about.name || 'Sachin Tiwari'
        },
        EMAILJS_CONFIG.publicKey
      );

      setSubmitStatus('success');
      setHistory(prev => [
        ...prev,
        {
          type: 'system',
          text: `[200 OK]: Transmission dispatched from ${formData.name} (${formData.email}) successfully!`,
          time: new Date().toLocaleTimeString()
        }
      ]);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 6000);
    } catch (err) {
      console.error('Email error:', err);
      setSubmitStatus('error');
      setHistory(prev => [
        ...prev,
        {
          type: 'error',
          text: `[500 ERROR]: Dispatch failed. Please connect via direct email or LinkedIn.`,
          time: new Date().toLocaleTimeString()
        }
      ]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-xl border border-cyan-500/30 bg-vscode-bg/95 backdrop-blur-md overflow-hidden shadow-2xl shadow-cyan-500/10">
      {/* Cyberpunk Terminal Header Bar */}
      <div className="p-3 md:p-4 bg-vscode-sidebar/95 border-b border-vscode-border flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5 ml-2">
            <VscTerminal size={15} />
            <span>17. Interactive Contact Terminal</span>
          </span>
          <span className="hidden sm:inline text-[11px] font-mono text-vscode-text/50">
            session: contact-inquiry.sh
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-emerald-400 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            LIVE LINK PROTOCOLS ACTIVE
          </span>
        </div>
      </div>

      {/* Terminal Screen Console */}
      <div className="p-4 md:p-6 bg-black/40 font-mono text-xs md:text-sm text-vscode-text/90 space-y-3 min-h-[280px] max-h-[460px] overflow-y-auto select-text">
        {history.map((item, idx) => (
          <div key={idx} className="leading-relaxed">
            {item.type === 'input' && (
              <div className="text-cyan-400 font-bold flex items-center gap-1">
                <span>{item.text}</span>
              </div>
            )}
            {item.type === 'system' && (
              <div className="text-emerald-400 font-semibold">
                › {item.text}
              </div>
            )}
            {item.type === 'info' && (
              <div className="text-vscode-text/80">
                › {item.text}
              </div>
            )}
            {item.type === 'error' && (
              <div className="text-red-400 font-semibold flex items-center gap-1">
                <VscError size={14} />
                <span>{item.text}</span>
              </div>
            )}
            {item.type === 'output' && (
              <div>{item.component}</div>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Interactive Command Chips */}
      <div className="p-3 md:p-4 bg-vscode-sidebar/60 border-t border-vscode-border">
        <div className="text-[11px] font-mono text-vscode-text/60 mb-2 flex items-center gap-1">
          <span>⚡ Click to execute working protocol:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handleCommand('email')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/25 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium transition-all"
          >
            <VscMail size={14} />
            <span>$ email</span>
          </button>
          <button
            type="button"
            onClick={() => handleCommand('linkedin')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/10 hover:bg-blue-600/25 border border-blue-600/30 text-blue-300 text-xs font-mono font-medium transition-all"
          >
            <FaLinkedin size={13} />
            <span>$ linkedin</span>
          </button>
          <button
            type="button"
            onClick={() => handleCommand('github')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10 hover:bg-purple-500/25 border border-purple-500/30 text-purple-400 text-xs font-mono font-medium transition-all"
          >
            <VscGithub size={14} />
            <span>$ github</span>
          </button>
          <button
            type="button"
            onClick={() => handleCommand('whatsapp')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium transition-all"
          >
            <FaWhatsapp size={14} />
            <span>$ whatsapp</span>
          </button>
          <button
            type="button"
            onClick={() => setShowMessageForm(prev => !prev)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-vscode-accent/15 hover:bg-vscode-accent/30 border border-vscode-accent/40 text-vscode-accent text-xs font-mono font-bold transition-all ml-auto"
          >
            <VscSend size={13} />
            <span>{showMessageForm ? 'Close Transmission Pipeline' : '$ send-message --gui'}</span>
          </button>
        </div>
      </div>

      {/* Embedded Terminal Message Transmission Pipeline */}
      {showMessageForm && (
        <div className="p-4 md:p-6 bg-black/60 border-t border-cyan-500/30 space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 text-sm font-mono font-bold">
                $ DISPATCH MESSAGE TO SACHIN TIWARI
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                EmailJS Engine
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowMessageForm(false)}
              className="text-xs font-mono text-vscode-text/60 hover:text-vscode-text"
            >
              [Close]
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="p-3 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs font-mono flex items-center gap-2 animate-slideDown">
              <VscCheck size={16} />
              <span>[200 SUCCESS]: Message delivered directly to Sachin Tiwari. Expect a response in under 24 hours!</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-3 rounded-lg bg-red-500/15 border border-red-500/40 text-red-400 text-xs font-mono flex items-center gap-2 animate-slideDown">
              <VscError size={16} />
              <span>[500 FAILED]: Direct dispatch encounter. Please email directly at sachintiwari.751858@gmail.com</span>
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-vscode-text/80 mb-1">
                  PARAM: sender_name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2.5 rounded bg-vscode-bg border border-vscode-border focus:border-cyan-400 text-vscode-text focus:outline-none"
                  placeholder="e.g. Hiring Manager / John Doe"
                />
              </div>
              <div>
                <label className="block text-vscode-text/80 mb-1">
                  PARAM: sender_email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2.5 rounded bg-vscode-bg border border-vscode-border focus:border-cyan-400 text-vscode-text focus:outline-none"
                  placeholder="e.g. recruiter@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-vscode-text/80 mb-1">
                PARAM: inquiry_subject *
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3 py-2.5 rounded bg-vscode-bg border border-vscode-border focus:border-cyan-400 text-vscode-text focus:outline-none"
                placeholder="Full Stack Developer Opportunity / Project Discussion"
              />
            </div>

            <div>
              <label className="block text-vscode-text/80 mb-1">
                PARAM: payload_message *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2.5 rounded bg-vscode-bg border border-vscode-border focus:border-cyan-400 text-vscode-text focus:outline-none resize-none"
                placeholder="Detail role requirements, compensation, project scope, or interview schedule..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <VscRefresh size={16} className="animate-spin" />
                  <span>TRANSMITTING VIA ENCRYPTED PROTOCOL...</span>
                </>
              ) : (
                <>
                  <VscSend size={16} />
                  <span>DISPATCH TRANSMISSION [EXECUTE]</span>
                </>
              )}
            </button>
          </form>
        </div>
      )}

      {/* Terminal Command Line Input */}
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          handleCommand(commandInput);
        }}
        className="p-3 md:p-4 bg-black/80 border-t border-cyan-500/20 flex items-center gap-2 text-xs font-mono"
      >
        <span className="text-cyan-400 font-bold">$</span>
        <input
          type="text"
          value={commandInput}
          onChange={(e) => setCommandInput(e.target.value)}
          placeholder="Type command: email, linkedin, github, whatsapp, send-message..."
          className="flex-1 bg-transparent text-vscode-text focus:outline-none font-mono"
        />
        <button
          type="submit"
          className="px-3 py-1 rounded bg-vscode-hover hover:bg-cyan-500/20 border border-vscode-border text-cyan-400 font-bold transition-colors"
        >
          Execute
        </button>
      </form>
    </div>
  );
};

export default InteractiveContactTerminal;
