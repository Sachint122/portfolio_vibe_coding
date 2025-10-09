import React, { useState } from 'react';
import { VscMail, VscGithub, VscLocation, VscSend, VscCheck } from 'react-icons/vsc';
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
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  
  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    serviceId: 'service_onvylkb',    // Replace with your EmailJS Service ID
    templateId: 'template_6ejmy03',  // Replace with your EmailJS Template ID
    publicKey: 'nSxlhbW-UkIq6PJvz'     // Replace with your EmailJS Public Key
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Send email using EmailJS
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
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
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
              href={`https://wa.me/${about.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-vscode-hover border border-vscode-border flex items-center justify-center hover:border-vscode-accent hover:bg-vscode-accent/10 transition-all"
              title="GitHub"
            >
              <FaWhatsapp size={24} className="text-vscode-text" />
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
          </div>
        </div>
        {/* Contact Form */}
        <div className="bg-vscode-hover border border-vscode-border rounded-lg p-6">
          <h2 className="text-2xl font-bold text-vscode-text mb-6">Send a Message</h2>
          
          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3 animate-slideDown">
              <VscCheck size={24} className="text-green-500" />
              <div>
                <p className="text-green-500 font-medium">Message sent successfully!</p>
                <p className="text-green-500/70 text-sm">I'll get back to you soon.</p>
              </div>
            </div>
          )}
          
          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg animate-slideDown">
              <p className="text-red-500 font-medium">Failed to send message</p>
              <p className="text-red-500/70 text-sm">Please try again or email me directly.</p>
            </div>
          )}
          
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
