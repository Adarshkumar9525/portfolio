import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Check, Copy, MessageSquare, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#8b5cf6', '#6366f1', '#06b6d4', '#10b981']
      });

      const mailtoLink = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.open(mailtoLink, '_blank');
    }, 800);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 dark:bg-violet-600/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="section-label mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-heading">
            Let's Build Something Exceptional Together
          </h2>
          <p className="section-subtitle">
            Whether you have an open engineering role, a high-impact freelance opportunity, or simply want to connect, my inbox is always open.
          </p>
          <div className="accent-bar" />
        </div>

        {/* Primary VIP LinkedIn Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-blue-600/15 via-violet-600/10 to-indigo-600/15 border border-blue-500/30 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl shadow-blue-500/[0.04]"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3.5 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30 shrink-0">
              <Linkedin className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                <ShieldCheck className="w-4 h-4" />
                <span>PRIMARY PROFESSIONAL PROFILE</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mt-0.5">
                Connect with Adarsh Kumar on LinkedIn
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                linkedin.com/in/adarshrishab • Verified MERN Stack Engineer & Meta/IBM Credentials
              </p>
            </div>
          </div>

          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.03] active:scale-[0.98] shrink-0"
          >
            <span>View LinkedIn Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* 2-Column Bento Grid: Direct Channels & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 sm:p-8 rounded-3xl bento-card space-y-5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                Direct Communication Channels
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Connect directly via verified email, phone, or explore open-source code repositories on GitHub.
              </p>

              {/* Email Card with 1-Click Copy */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-violet-500/15 text-violet-600 dark:text-violet-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono font-medium">Email Address</div>
                    <a href={`mailto:${portfolioData.personal.email}`} className="text-xs font-bold text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 truncate transition-colors">
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(portfolioData.personal.email, 'email')}
                  aria-label="Copy Email"
                  className="p-2 rounded-lg bg-slate-200/70 dark:bg-white/[0.06] text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors shrink-0"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card with 1-Click Copy */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono font-medium">Direct Phone / WhatsApp</div>
                    <a href={`tel:${portfolioData.personal.phone}`} className="text-xs font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-mono">
                      {portfolioData.personal.phoneDisplay}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(portfolioData.personal.phone, 'phone')}
                  aria-label="Copy Phone"
                  className="p-2 rounded-lg bg-slate-200/70 dark:bg-white/[0.06] text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shrink-0"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono font-medium">Base Location</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    {portfolioData.personal.location}
                  </div>
                </div>
              </div>

              {/* GitHub Codebase Link */}
              <div className="pt-2">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] hover:border-violet-400/40 text-slate-800 dark:text-slate-200 flex items-center justify-between text-xs font-bold transition-all shadow-sm group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-violet-500 transition-colors" />
                    <span>GitHub Codebase ({portfolioData.personal.githubUsername})</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-violet-500 transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bento-card relative">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-6">
                Fill out the form below and I will get back to you promptly within 24 hours.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-violet-50 dark:bg-violet-950/40 border border-violet-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-violet-500/20 text-violet-600 dark:text-violet-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Thank you, {formData.name || 'Friend'}!</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Your message has been initiated. Looking forward to speaking with you!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-bold rounded-xl bg-slate-200 dark:bg-white/[0.08] text-violet-700 dark:text-violet-300 border border-slate-300 dark:border-white/[0.1] hover:bg-slate-300 dark:hover:bg-white/[0.12] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-bold">
                        Your Name <span className="text-violet-600 dark:text-violet-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-300/80 dark:border-white/[0.08] focus:border-violet-500 focus:outline-none text-slate-900 dark:text-slate-100 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-bold">
                        Your Email <span className="text-violet-600 dark:text-violet-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-300/80 dark:border-white/[0.08] focus:border-violet-500 focus:outline-none text-slate-900 dark:text-slate-100 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-bold">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Full Stack Developer Opportunity / Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-300/80 dark:border-white/[0.08] focus:border-violet-500 focus:outline-none text-slate-900 dark:text-slate-100 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-bold">
                      Message <span className="text-violet-600 dark:text-violet-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Adarsh, we were impressed by your MERN stack projects and would love to discuss an opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-300/80 dark:border-white/[0.08] focus:border-violet-500 focus:outline-none text-slate-900 dark:text-slate-100 text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
