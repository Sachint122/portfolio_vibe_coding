import React, { useState } from 'react';
import { VscMail, VscGithub, VscLocation, VscSend, VscCheck, VscError } from 'react-icons/vsc';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { about } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const EMAILJS_CONFIG = {
    serviceId: 'service_onvylkb',
    templateId: 'template_6ejmy03',
    publicKey: 'nSxlhbW-UkIq6PJvz'
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: about.name,
        },
        EMAILJS_CONFIG.publicKey
      );
      
      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const contactMethods = [
    {
      icon: VscMail,
      label: 'Email',
      value: about.email,
      link: `mailto:${about.email}`,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: VscLocation,
      label: 'Location',
      value: about.location,
      link: null,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];
  
  const socialLinks = [
    {
      icon: VscGithub,
      label: 'GitHub',
      link: about.github,
      color: 'hover:text-purple-400'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      link: `https://wa.me/${about.whatsapp?.replace(/[^0-9]/g, '')}`,
      color: 'hover:text-green-400'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      link: about.linkedin,
      color: 'hover:text-blue-400'
    }
  ];
  
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 md:mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full mb-3 md:mb-4">
          <VscMail className="text-blue-400" size={14} />
          <span className="text-blue-400 text-xs md:text-sm font-medium">Get In Touch</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
          <span className="bg-gradient-to-r from-vscode-accent via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h1>
        <p className="text-vscode-text/70 text-sm md:text-lg max-w-2xl mx-auto px-4">
          Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing together!
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
        {/* Contact Info - 2 columns */}
        <div className="lg:col-span-2">
          <h2 className="text-xl md:text-2xl font-bold text-vscode-text mb-4 md:mb-6 flex items-center gap-2">
            <span>📞</span>
            Contact Information
          </h2>
          
          {/* Contact Methods */}
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const content = (
                <div className="relative group">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${method.gradient} rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                  <div className="relative flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-vscode-hover border border-vscode-border rounded-lg group-hover:border-vscode-accent transition-all">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${method.gradient} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs md:text-sm text-vscode-text/60 mb-1">{method.label}</div>
                      <div className="text-sm md:text-base text-vscode-text font-medium truncate">{method.value}</div>
                    </div>
                  </div>
                </div>
              );
              
              return method.link ? (
                <a key={index} href={method.link} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
          
          {/* Social Links */}
          <h3 className="text-lg md:text-xl font-bold text-vscode-text mb-3 md:mb-4">Connect with Me</h3>
          <div className="flex gap-3 md:gap-4 mb-6 md:mb-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-vscode-hover border border-vscode-border flex items-center justify-center hover:border-vscode-accent transition-all ${social.color}`}
                  title={social.label}
                >
                  <Icon size={20} className="text-vscode-text group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>
          
          {/* Quick Response Badge */}
          <div className="p-4 md:p-5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg">
            <div className="flex items-center gap-2 md:gap-3 mb-2">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500 animate-pulse flex-shrink-0"></div>
              <span className="text-green-400 font-semibold text-sm md:text-base">Usually responds in 24 hours</span>
            </div>
            <p className="text-vscode-text/60 text-xs md:text-sm">
              I check my emails regularly and try to respond as quickly as possible.
            </p>
          </div>
        </div>
        
        {/* Contact Form - 3 columns */}
        <div className="lg:col-span-3">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-vscode-accent to-purple-600 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative bg-vscode-hover border border-vscode-border rounded-lg p-4 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-vscode-text mb-4 md:mb-6 flex items-center gap-2">
                <span>✉️</span>
                Send a Message
              </h2>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-4 md:mb-6 p-3 md:p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start gap-2 md:gap-3 animate-slideDown">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <VscCheck size={20} className="text-green-500" />
                  </div>
                  <div>
                    <p className="text-green-500 font-medium text-sm md:text-base">Message sent successfully! 🎉</p>
                    <p className="text-green-500/70 text-xs md:text-sm">I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}
              
              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-4 md:mb-6 p-3 md:p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-2 md:gap-3 animate-slideDown">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <VscError size={20} className="text-red-500" />
                  </div>
                  <div>
                    <p className="text-red-500 font-medium text-sm md:text-base">Failed to send message</p>
                    <p className="text-red-500/70 text-xs md:text-sm">Please try again or email me directly</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-vscode-text mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-vscode-bg border border-vscode-border rounded-lg text-sm md:text-base text-vscode-text focus:border-vscode-accent focus:outline-none focus:ring-2 focus:ring-vscode-accent/20 transition-all placeholder:text-vscode-text/30"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-vscode-text mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-vscode-bg border border-vscode-border rounded-lg text-sm md:text-base text-vscode-text focus:border-vscode-accent focus:outline-none focus:ring-2 focus:ring-vscode-accent/20 transition-all placeholder:text-vscode-text/30"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs md:text-sm font-medium text-vscode-text mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-vscode-bg border border-vscode-border rounded-lg text-sm md:text-base text-vscode-text focus:border-vscode-accent focus:outline-none focus:ring-2 focus:ring-vscode-accent/20 transition-all placeholder:text-vscode-text/30"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label className="block text-xs md:text-sm font-medium text-vscode-text mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-vscode-bg border border-vscode-border rounded-lg text-sm md:text-base text-vscode-text focus:border-vscode-accent focus:outline-none focus:ring-2 focus:ring-vscode-accent/20 transition-all resize-none placeholder:text-vscode-text/30"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-vscode-accent to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative w-full flex items-center justify-center gap-2 md:gap-3 py-3 md:py-4 bg-vscode-accent text-white rounded-lg font-medium text-base md:text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg">
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        <span className="text-sm md:text-base">Sending...</span>
                      </>
                    ) : (
                      <>
                        <VscSend size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                </button>
              </form>
              
              {/* Privacy Note */}
              <div className="mt-4 md:mt-6 p-3 md:p-4 bg-vscode-bg/50 rounded-lg border border-vscode-border/50">
                <p className="text-xs text-vscode-text/50 text-center">
                  🔒 Your information is safe and will only be used to respond to your inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom CTA */}
      <div className="mt-8 md:mt-12 text-center px-4">
        <div className="inline-flex flex-wrap items-center justify-center gap-1 md:gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg text-xs md:text-sm">
          <span className="text-vscode-text/70">
            Prefer other methods? Reach out on{' '}
          </span>
          <a href={about.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-medium">
            LinkedIn
          </a>
          <span className="text-vscode-text/70">or</span>
          <a href={`https://wa.me/${about.whatsapp?.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline font-medium">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
