import React, { useState } from 'react';
import { VscMail, VscGithub, VscLocation, VscSend } from 'react-icons/vsc';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

const ContactSection = () => {
  const { about } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Connect to backend API
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-vscode-accent mb-3">Let's Connect</h1>
        <p className="text-vscode-text text-lg">
          Have a project in mind? Let's discuss how we can work together
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-vscode-text mb-6">Contact Information</h2>
          
          <div className="space-y-4 mb-8">
            {/* Email */}
            <a
              href={`mailto:${about.email}`}
              className="flex items-center gap-4 p-4 bg-vscode-hover border border-vscode-border rounded-lg hover:border-vscode-accent transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-vscode-accent/10 flex items-center justify-center group-hover:bg-vscode-accent/20 transition-colors">
                <VscMail size={28} className="text-vscode-accent" />
              </div>
              <div>
                <div className="text-sm text-vscode-text/60">Email</div>
                <div className="text-vscode-text font-medium text-lg">{about.email}</div>
              </div>
            </a>
            
            {/* Location */}
            <div className="flex items-center gap-4 p-4 bg-vscode-hover border border-vscode-border rounded-lg">
              <div className="w-14 h-14 rounded-full bg-vscode-accent/10 flex items-center justify-center">
                <VscLocation size={28} className="text-vscode-accent" />
              </div>
              <div>
                <div className="text-sm text-vscode-text/60">Location</div>
                <div className="text-vscode-text font-medium text-lg">{about.location}</div>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <h3 className="text-xl font-bold text-vscode-text mb-4">Follow Me</h3>
          <div className="flex gap-4">
            <a
              href={about.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-vscode-hover border border-vscode-border flex items-center justify-center hover:border-vscode-accent hover:bg-vscode-accent/10 transition-all"
              title="GitHub"
            >
              <VscGithub size={24} className="text-vscode-text" />
            </a>
            <a
              href={about.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-vscode-hover border border-vscode-border flex items-center justify-center hover:border-vscode-accent hover:bg-vscode-accent/10 transition-all"
              title="LinkedIn"
            >
              <FaLinkedin size={24} className="text-vscode-text" />
            </a>
            <a
              href={about.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-vscode-hover border border-vscode-border flex items-center justify-center hover:border-vscode-accent hover:bg-vscode-accent/10 transition-all"
              title="Twitter"
            >
              <FaTwitter size={24} className="text-vscode-text" />
            </a>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-vscode-hover border border-vscode-border rounded-lg p-6">
          <h2 className="text-2xl font-bold text-vscode-text mb-6">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-vscode-text mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-vscode-bg border border-vscode-border rounded-lg text-vscode-text focus:border-vscode-accent focus:outline-none focus:ring-2 focus:ring-vscode-accent/20 transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-vscode-text mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-vscode-bg border border-vscode-border rounded-lg text-vscode-text focus:border-vscode-accent focus:outline-none focus:ring-2 focus:ring-vscode-accent/20 transition-all"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-vscode-text mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-vscode-bg border border-vscode-border rounded-lg text-vscode-text focus:border-vscode-accent focus:outline-none focus:ring-2 focus:ring-vscode-accent/20 transition-all"
                placeholder="Project Discussion"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-vscode-text mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-vscode-bg border border-vscode-border rounded-lg text-vscode-text focus:border-vscode-accent focus:outline-none focus:ring-2 focus:ring-vscode-accent/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 py-4 bg-vscode-accent text-white rounded-lg font-medium text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Sending...
                </>
              ) : (
                <>
                  <VscSend size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
